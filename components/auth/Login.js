//import react
import React, { Component } from 'react';
//import react-native
import { View, Button, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native';

//import firebase
import firebase from 'firebase'

//Login Component with state
export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    //firebase signin function
    onSignIn(){
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />
                <TouchableHighlight onPress={() => this.onSignIn()}>
              <View style={styles.button}>
                <Text style={{textAlign:'center', color:'#fff', fontSize: 16}}>Sign In</Text>
              </View>
              </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2b3e50',
        padding: 15,
        marginLeft: '25%',
        marginRight: '25%',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        borderRadius: 50
      }
})

export default Login;
