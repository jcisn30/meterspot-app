import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Title, Screen, Text } from 'react-native';
import ReactNative from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import Messages from '../containers/Messages';
// import Input from '../containers/Input';
import { sendMessage } from '../../redux/actions';

const mapStateToProps = (state) => ({
    chatHeight: state.chatroom.meta.height,
    user: state.user
});

class Keen extends Component {
    

    

    render() {
        return (
          <GiftedChat />
        )
    }
}

export default connect(mapStateToProps)(Keen);
