//import combineReducers redux
import { combineReducers } from 'redux';
//import user
import { user } from './users';

const Reducers = combineReducers({
    userState: user
})

export default Reducers;