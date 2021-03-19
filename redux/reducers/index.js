//import combineReducers redux
import { combineReducers } from 'redux';
//import user
import { user } from './users';
import chatroom from './chatroom';


const Reducers = combineReducers({
    userState: user,
    chatroom
})

export default Reducers;