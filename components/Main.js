//import react component
import React, { Component } from 'react';
//import react native
import { Text, View } from 'react-native';

//import connect react-redux
import { connect } from 'react-redux';
//import bind action creators redux
import { bindActionCreators } from 'redux';
//import fetchuser
import { fetchUser } from '../redux/actions/index';

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        const { currentUser } = this.props;
        if (currentUser == undefined) {
            return (
                <View></View>
            )
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <Text>{ currentUser.name } is logged in</Text>
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
