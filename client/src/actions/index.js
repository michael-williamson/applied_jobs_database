import {ADD_JOB} from './types';

import axios from 'axios';

export const addJob = formValues => async (dispatch) => {
    const response = await axios.post('/api/addJob',formValues);
    dispatch(
        {
            type:ADD_JOB,
            payload:response.data
        }
    );
    
}