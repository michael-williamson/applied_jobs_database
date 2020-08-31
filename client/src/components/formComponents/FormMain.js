import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';

//helper component
import {ListOfStates} from './helperComponents/ListOfStates';
import {DatePicker} from './helperComponents/DatePicker';
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
                <div className="field">
                    <label>Date:</label>
                    <Field name="date" component={DatePicker}/>
                </div>
                <button className="ui button blue" type="submit">Submit</button>
                <Link to="/table" className="ui button green">To Table</Link>
            </form>
        );
    }
}

export default connect(null,{addJob})(reduxForm({form:'jobForm'})(FormMain));