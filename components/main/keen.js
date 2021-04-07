import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Title, Screen, Text } from 'react-native';
import ReactNative from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



import firebase from 'firebase'
//import connect react-redux
import { useSelector } from 'react-redux'
//import fetchuser
import { fetchMessages } from '../../redux/actions/index';
import messages from '../../redux/reducers/messages';
require('firebase/firestore')

export default function Keen() {
    //message array state
    const [messageList, setMessageList] = useState(Array());
    const [text, setText] = useState("")

    useEffect(() => {
        const subscriber = firebase.firestore()
        firebase.firestore()
        .collection('messages-lincoln')
        .onSnapshot(querySnapshot => {
            const messageList = Array();
            querySnapshot.forEach(documentSnapshot => {
              messageList.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setMessageList(messageList);
            console.log(messageList);
            // Unsubscribe from events when no longer in use
        
          });
          return () => subscriber();
      }, Array());
    


      
  
    
    const Key = Math.random().toString(36).slice(2); 
    
        const onCommentSend = () => {
             
            firebase.firestore()
                .collection('messages')
                .doc('lincoln')
                .collection(Key)
                .doc('message')
                .set({
                    text: text,

                })
            }

             
        
        return (
          <GiftedChat 
          messages={messageList}
          onInputTextChanged={(text) => setText(text)}
          onSend={onCommentSend}
        
          />
          
        )
    }

    