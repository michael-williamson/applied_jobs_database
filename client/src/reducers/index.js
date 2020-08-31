import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import fetchJobs from './fetchJobs';

export default combineReducers({
    fetchJobs,
    form:formReducer,
});