import {ADD_JOB} from './types';

import axios from 'axios';
import history from '../../src/history';

export const addJob = formValues => async (dispatch) => {
    const response = await axios.post('/api/addJob',formValues);
    dispatch(
        {
            type:ADD_JOB,
            payload:response.data
        }
    );

    history.push('/table');
    
}