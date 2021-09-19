import React, { useState } from "react";
import { HACKATHON_SORT_OPTION } from "./../../constant";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { CommonCard } from "./../../components/app-card/Card";
import { FormModal } from "./../../components/form-modal/FormModal";
import { ChallengeForm } from "./../../components/app-forms/ChallengeForm";
import { Card, Container, Dropdown, Form, Header, Icon, Select } from "semantic-ui-react";
import { UserContext } from "../../contexts/userContexts";
import { sort, filterRecords } from "../../lib/utils";
import './Hackathon.css';

const Hackathons = () => {
    const db = getDatabase();
    const [challenges, setChallenges] = React.useState([]);
    const [filteredChallenges ,  setFilteredChallenges] = useState([]);
    const [tags, setTags] = React.useState([]);
    const [showChallengeForm, setShowForm] = React.useState(false);
    const [filter, setFilter] = React.useState([]);
    const [sortBy, setSortBy] = React.useState('');
    const formRef = React.useRef();
    const [user] = React.useContext(UserContext)

    React.useEffect(() => {
        fetchChallenges();
        fetchTags();
    },[])

    React.useEffect(() => {
        setFilteredChallenges(filterRecords(challenges, 'tags', filter));
    },[challenges, filter])

    const getSortedCards = (chalngs, sortBy) => {
        const [fieldName, order] =  sortBy !== '' ? sortBy.split('-') : [];
        chalngs = sort(chalngs, fieldName, order);
        return chalngs.map((challenge) => {
            let {id , name, description, upVotes , tags} = challenge;
            return (
                <CommonCard key={id} 
                name={name} 
                description={description} 
                tags={tags.join(',')} 
                extraContent={getUpVoteBtn(challenge, upVotes)}/>
            )
        })
    }

    const getUpVoteBtn = (challenge, upVotes = []) => {
        let isUserVoted = isUserUpVoted(upVotes);
        return (<a><Icon name={`thumbs up outline`} className={isUserVoted ? 'upVoted' : ''} onClick={() => {if(isUserVoted) return; upVoteChallenge(challenge, upVotes)}}/> {upVotes.length}</a>)
    }

    const upVoteChallenge = (challenge, upVotes = []) => {
        upVotes.push(user);
        set(ref(db, `challenges/${challenge.id}`), {...challenge, upVotes});
    }
    
    const saveChallenge = (event) => {
        let formValues = formRef.current.getFormValue();
        push(ref(db, 'challenges'), {
            ...formValues, 
            upVotes:[], 
            created_on:new Date().getTime(), 
            created_by:user
        }).then((response) => {
            let challenge = response.toJSON();
        })
        setShowForm(false)
        return false;
    }

    const getOptions = (options) => {
        return options.map((option, index) => {
            return {key:index, text:option, value:option}
        })
    }

    const selectTag = (event, data) => {
        setFilter(data.value);
    }

    const isUserUpVoted = (upVotes = []) => {
        return upVotes.includes(user);
    }

    const fetchChallenges = () => {
        const challengeRef = ref(db, '/challenges');
        onValue(challengeRef, (snapshot) => {
            const data = snapshot.val();
            data && setChallenges(Object.keys(data).map((key) => {
                return { ...data[key], id:key};
            }));
        });
    }

    const fetchTags = () => {
        const tagRef = ref(db, '/tags');
        onValue(tagRef, (snapshot) => {
            const data = snapshot.val();
            data && setTags(data);
        });
    }

    return (
        <Container>
            <Header as='h3' block>
                Challenges
                <button className="right floated ui primary button" style={{marginTop:"-0.5rem"}} onClick={() => setShowForm(true)}>Create Challenge</button>
            </Header>
 
            <div className="ui ten column stackable grid">
                <div className="six wide column">
                    <Form.Select
                        fluid
                        options={getOptions(tags)}
                        placeholder="Filter By"
                        search
                        searchInput={{ id: 'form-select-control-filter', name:'filter' }}
                        onChange={selectTag}
                        value={filter}
                        multiple>
                    </Form.Select>
                </div>
                <div className="two wide column right floated">
                    Sort By {' '} <Dropdown inline options={HACKATHON_SORT_OPTION} value={sortBy} onChange={(e, d) => {setSortBy(d.value)}} />
                </div>
            </div>
            <div className="ui three column stackable grid">
                <Card.Group> {getSortedCards(filteredChallenges, sortBy)} </Card.Group>
            </div>
            <FormModal id="challengeForm" isActive={showChallengeForm} onClose={()=>setShowForm(false)} onSave={saveChallenge} header="Create Challenge" saveButton="Save">
                <ChallengeForm ref={formRef} options={tags}></ChallengeForm>
            </FormModal>
        </Container>
    )
}

export default Hackathons;