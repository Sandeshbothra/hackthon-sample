import {useEffect, useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, TextArea } from "semantic-ui-react";

const INITIAL_FORM_VALUE = {name:'', description:'', tags:[]}
export const ChallengeForm = forwardRef((props, ref) => {
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUE);
    const [selectOption, setSelectOptions] = useState([]);

    useImperativeHandle(
        ref,
        () => ({
            getFormValue(){
                return formValues;
            }
        })
    )

    useEffect(() => {
        setSelectOptions(props.options.map((option, index) => {
            return {key:index, text:option, value:option}
        }))
    },[props.options])

    const handleOnChange = (event, data) => {
        let name = data.searchInput ? data.searchInput.name : data.name
        setFormValues({...formValues, [name]:data.value});
    }
    

    return (
        <Form>
            <Form.Field 
                control={Input} 
                name="title" 
                label="Title" 
                value={formValues.title} 
                placeholder="Challenge Name"
                onChange={handleOnChange} />
            <Form.Field 
                control={TextArea} 
                name="description" 
                label="Description" 
                value={formValues.description}
                onChange={handleOnChange} />
            <Form.Field
                control={Select}
                options={selectOption}
                label={{ children: 'Tags', htmlFor: 'form-select-control-tags' }}
                placeholder='Tags'
                search
                searchInput={{ id: 'form-select-control-tags', name:"tags" }}
                onChange={handleOnChange}
                multiple
            />
        </Form>
    )
})

ChallengeForm.propTypes = {
    tags:PropTypes.array
}

ChallengeForm.defaultProps = {
    tags:[]
}




