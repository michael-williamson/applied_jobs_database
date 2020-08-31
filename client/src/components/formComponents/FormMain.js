import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';
//helper component
import {ListOfStates} from './helperComponents/ListOfStates';

class FormMain extends Component {
    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Company:</label>
                    <Field name="company" component="input"/>
                </div>
                <div className="field">
                    <label>City:</label>
                    <Field name="city" component="input"/>
                </div>
                <div className="field">
                    <label>State:</label>
                    <Field name="state" component="select">
                        <ListOfStates/>
                    </Field>
                </div>
                <div className="field">
                    <label>Type of Development:</label>
                    <Field name="typeOfDevelopment" component="select">
                        <option/>
                        <option value="Front End Developer">Front End Devleoper</option>
                        <option value="React Developer">React Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                    </Field>
                </div>
            </form>
        );
    }
}

export default reduxForm({form:'jobForm'})(FormMain);