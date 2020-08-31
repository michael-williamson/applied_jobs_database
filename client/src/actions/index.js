import {ADD_JOB, FETCH_JOBS} from './types';

import axios from 'axios';
import history from '../../src/history';

export const addJob = formValues => async (dispatch) => {
    const response = await axios.post('/api/addJob',formValues);
    dispatch({
            type:ADD_JOB,
            payload:response.data
        });

    history.push('/table');
    
}

export const fetchJobs = () => async (dispatch) => {
    const response = await axios.post('/api/fetchJobs');
    dispatch({
        type:FETCH_JOBS,
        payload:response.data
    });
}