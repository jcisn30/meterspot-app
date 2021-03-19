import React, { Component } from 'react';
import {
    Text, View, FlatList
} from 'react-native';
import moment from 'moment';

const Message = ({ msg }) => (
    <Row>
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Text>{msg.author.name}</Text>
                <Text>{moment(msg.time).from(Date.now())}</Text>
            </View>
            <Text styleName="multiline">{msg.text}</Text>
        </View>
    </Row>
);

const MessageList = ({ messages, onLayout }) => (
    <FlatList data={messages}
              renderItem={msg => <Message msg={msg} />}
              />
);

export default MessageList;