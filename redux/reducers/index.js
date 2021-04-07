//import combineReducers redux
import { combineReducers } from 'redux';
//import user
import { user } from './users';
import messages from './messages';


const Reducers = combineReducers({
    userState: user,
    messages
})

export default Reducers;