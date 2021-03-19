//import user state change
import { USER_STATE_CHANGE } from '../constants/index';
//import firebase
import firebase from 'firebase';

import { Platform } from 'react-native';

//fetch current user
export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({type : USER_STATE_CHANGE, currentUser : snapshot.data()})
            }
            else {
                console.log('does not exist')
            }
        })
    })
}

export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});

export const sendMessage = (text, user) => {
    return function (dispatch) {
        let msg = {
                text: text,
                time: Date.now(),
                author: {
                    name: user.name || Unknown
                }
            };

        const newMsgRef = firebase.database()
                                  .ref('messages')
                                  .push();
        msg.id = newMsgRef.key;
        newMsgRef.set(msg);

        dispatch(addMessage(msg));
    };
};

export const startFetchingMessages = () => ({
    type: 'START_FETCHING_MESSAGES'
});

export const receivedMessages = () => ({
    type: 'RECEIVED_MESSAGES',
    receivedAt: Date.now()
});

export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(startFetchingMessages());

        firebase.database()
                .ref('messages')
                .orderByKey()
                .limitToLast(20)
                .on('value', (snapshot) => {
                    // gets around Redux panicking about actions in reducers
                    setTimeout(() => {
                        const messages = snapshot.val() || [];

                        dispatch(receiveMessages(messages))
                    }, 0);
                });
    }
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

        dispatch(receivedMessages());
    }
}

export const updateMessagesHeight = (event) => {
    const layout = event.nativeEvent.layout;

    return {
        type: 'UPDATE_MESSAGES_HEIGHT',
        height: layout.height
    }
}

const startChatting = function (dispatch) {
    dispatch(fetchMessages());
   
}