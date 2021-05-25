import React from 'react';
import { Field, reduxForm } from 'redux-form'

const StreamCreate = ({ handleSubmit }) => {
        
    const renderInput = ({ input, label, meta }) => {
        console.log(meta)
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
                <div>{meta.error}</div>
            </div>        
        );
    }
    
    const onSubmit = (props) => {
        console.log(props)
    }
    
    return (
        <form
            className="ui form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Field
                name="title"
                component={renderInput}
                label="Enter Title"
            />
            <Field
                name="description"
                component={renderInput}
                label="Enter Description"
            />
            <button
                className="ui button primary">
                    Submit
            </button>
        </form>
    );
}

const validate = ({ title, description }) => {
    const errors = {};

    if (!title) {
        errors.title = 'You must enter a title'
    }

    if (!description) {
        errors.description = 'You must enter a description'
    }

    return errors
}

export default reduxForm( {
    form: 'streamCreate',
    validate: validate
}
)(StreamCreate);