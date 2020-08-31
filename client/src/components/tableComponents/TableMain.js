import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//action creator
import {fetchJobs} from '../../actions/index';

class TableMain extends Component {

    componentDidMount(){
        this.props.fetchJobs();
    }  

    renderTable = () => {
       return this.props.jobList.map((job)=>{
            return (
                <tr>
                    <td>{job.company}</td>
                    <td>{job.city}</td>
                    <td>{job.state}</td>
                    <td>{job.typeOfDev}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="ui container">
                <h3>
                    {`I have applied for ${this.props.jobList.length} jobs`}
                </h3>
                <Link className="ui button blue" to="/form">Back to Form</Link>
            <table class="ui celled table">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Type Of Development</th>
                </tr>
            </thead>
            <tbody>
                {this.renderTable()}
            </tbody>
            </table>
            </div>
        );
    }
}

const mapStateToProps = ({fetchJobs}) => {
    return {
        jobList:fetchJobs
    }
}

export default connect(mapStateToProps,{fetchJobs})(TableMain);