//import user state change
import { USER_STATE_CHANGE } from '../constants/index';
//import firebase
import firebase from 'firebase';



export function fetchMessages() {
    return ((dispatch) => {
        firebase.firestore()
        .collection('messages')
        .doc('lincoln')
        .get()
        .onSnapshot(querySnapshot => {
            const measureList = Array();
            querySnapshot.forEach(documentSnapshot => {
              messagesList.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setMessageList(MessageList);
            // console.log(measureList);
          });
      }, Array());
    }


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