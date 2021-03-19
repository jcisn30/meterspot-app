//import react
import React, { Component } from 'react';
//import react-native
import { View, Button, Text, StyleSheet, TextInput, SafeAreaView, Alert } from 'react-native';
//import react-native-elements
import { Input, Icon } from 'react-native-elements';

//import firebase
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Register component with state
export class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this);
    }

    //firebase signup function
    onSignUp(){
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name,
                    email
                })
            console.log(result)
        })
        .catch((error) => {
            Alert.alert(error.message)
        })
    }

    render() {
        return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{marginTop: '20%'}}>
                <Input 
                    placeholder="name"
                    onChangeText={(name) => this.setState({name})}
                    leftIcon={<Icon
                    name='person'
                    size={24}
                  />}
                />
                <Input 
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                    leftIcon={<Icon
                        name='email'
                        size={24}
                      />}
                />
                <Input 
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    leftIcon={<Icon
                        name='lock'
                        size={24}
                      />}
                />
            <TouchableOpacity onPress={() => this.onSignUp()}>
                <View style={styles.button}>
                    <Text style={{textAlign:'center', color:'#fff', fontSize: 16}}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
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

export default Register;
