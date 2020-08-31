import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
//helper component
import {ListOfStates} from './helperComponents/ListOfStates';
//actions
import {addJob} from '../../actions/index';

class FormMain extends Component {

    onSubmit = (formValues) =>  this.props.addJob(formValues);

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                    <Field name="typeOfDev" component="select">
                        <option/>
                        <option value="Front End Developer">Front End Devleoper</option>
                        <option value="React Developer">React Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                    </Field>
                </div>
                <button className="ui button blue" type="submit">Submit</button>
            </form>
        );
    }
}

export default connect(null,{addJob})(reduxForm({form:'jobForm'})(FormMain));