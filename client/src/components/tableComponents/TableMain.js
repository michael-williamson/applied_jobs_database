import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableMain extends Component {
    render() {
        return (
            <table class="ui celled table">
            <thead>
                <tr><th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr></thead>
            <tbody>
                <tr>
                <td data-label="Name">James</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
                </tr>
                <tr>
                <td data-label="Name">Jill</td>
                <td data-label="Age">26</td>
                <td data-label="Job">Engineer</td>
                </tr>
                <tr>
                <td data-label="Name">Elyse</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
                </tr>
            </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({fetchJobs}) => {
    return {
        fetchJobs
    }
}

export default connect(mapStateToProps)(TableMain);