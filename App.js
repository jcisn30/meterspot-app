// import react
import React, { Component } from 'react';
//firebase keys via .env
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';
//import react native
import { View, Text } from 'react-native';

//import firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

//import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import additional screens
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import MainScreen from './components/Main';
import SkipMainScreen from './components/SkipMain';
import KeenScreen from './components/main/keen';

//import provider
import { Provider } from 'react-redux';
//import create store and middleware
import { createStore, applyMiddleware } from 'redux';
//import root reducer
import rootReducer from './redux/reducers';
//import redux thunk
import thunk from 'redux-thunk';

//create store
const store = createStore(rootReducer, applyMiddleware(thunk))
//inialize firebase
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

//create stack navigation
const Stack = createStackNavigator();

//App component with state
export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  //check if user is logged in
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    //if not loaded display loading message
    if(!loaded){
        return(
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text>Loading</Text>
          </View>
        )
    }
    //if not logged in show this navigation
    if(!loggedIn){
      return (
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Back' component={LandingScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'MeterSpot', headerTransparent: true, headerTintColor: '#2b3e50', headerTitleStyle: { color: '#2b3e50' } }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'MeterSpot', headerTransparent: true, headerTintColor: '#2b3e50', headerTitleStyle: { color: '#2b3e50' } }} />
            <Stack.Screen name='SkipMain' component={SkipMainScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Keen' component={KeenScreen} options={{  title: 'MeterSpot', headerTransparent: true, headerTintColor: '#2b3e50', headerTitleStyle: { color: '#2b3e50' }, gestureDirection: 'vertical-inverted'}}/>
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      );
    }
    //if logged in say user logged in
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Main' component={MainScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Keen' component={KeenScreen} options={{  title: 'MeterSpot', headerTransparent: true, headerTintColor: '#2b3e50', headerTitleStyle: { color: '#2b3e50' }, gestureDirection: 'vertical-inverted'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
   
  }
}

export default App


