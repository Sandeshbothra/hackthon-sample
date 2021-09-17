import React from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { CommonCard } from "./../../components/app-card/Card";
import { FormModal } from "./../../components/form-modal/FormModal";
import { ChallengeForm } from "./../../components/app-forms/ChallengeForm";

const Hackathons = () => {
    const db = getDatabase();
    const [challenges, setChallenges] = React.useState({});
    const [tags, setTags] = React.useState([]);
    const [showChallengeForm, setShowForm] = React.useState(false);
    const formRef = React.useRef();

    React.useEffect(() => {
        const challengeRef = ref(db, '/challenges');
        onValue(challengeRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            data && setChallenges({...data});
        });

        const tagRef = ref(db, '/tags');
        onValue(tagRef, (snapshot) => {
            const data = snapshot.val();
            data && setTags(data);
        });
    },[])

    const getAllCards = (chalngs) => {
        return Object.keys(chalngs).map((key) => {
            let {name, description, upVote, tags} = chalngs[key];
            
            return <CommonCard key={key} name={name} description={description} tags={tags.join(',')} upvote={upVote}/>
        })
    }
    
    const saveChallenge = (event) => {
        let formValues = formRef.current.getFormValue();
        
        push(ref(db, 'challenges'), {...formValues, upVote:0}).then((response) => {
            console.log(response.toJSON())
        })
        setShowForm(false)
        return false;
    }

    return (
        <div className="ui container">
            <h3 className="ui header"> Challenges </h3>
            <div className="ui divider"></div>
            <div className="ui four column stackable grid">
                <div className="column right floated">
                    <button className="right floated ui primary button" onClick={() => setShowForm(true)}>Create Challenge</button>
                </div>
            </div>
            <div className="ui three column stackable grid">
                <div className="column">
                    {getAllCards(challenges)}
                </div>
            </div>
            <FormModal id="challengeForm" isActive={showChallengeForm} onClose={()=>setShowForm(false)} onSave={saveChallenge} header="Create Challenge" saveButton="Save">
                <ChallengeForm ref={formRef} options={tags}></ChallengeForm>
            </FormModal>
        </div>
    )
}

export default Hackathons;