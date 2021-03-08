//import react component
import React, { Component } from 'react';
//import react native
import { Text, View } from 'react-native';
//import bottom tab navigator
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//import connect react-redux
import { connect } from 'react-redux';
//import bind action creators redux
import { bindActionCreators } from 'redux';
//import fetchuser
import { fetchUser } from '../redux/actions/index';

//import additional screens
import MapScreen from './main/map';
import ProfileScreen from './main/profile';
import KeenScreen from './main/keen';

//create bottom tab navigator
const Tab = createMaterialBottomTabNavigator();

//create empty screen
// const EmptyScreen = () => {
//     return(null);
// }
export class Main extends Component {
    
    render() {
        return (
            <Tab.Navigator initialRouteName="Map" labeled={false} barStyle={{ backgroundColor: '#2b3e50', paddingBottom: '2%' }}>
                
                <Tab.Screen name="Map" component={MapScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                    name='map'
                    color={color}
                    size={28}
                  />
                    )
                }}/>
                <Tab.Screen name="KeenContainer" component={KeenScreen} 
                // listeners={({ navigation }) =>({
                //     tabPress: event => {
                //         event.preventDefault();
                //         navigation.navigate('Keen') 
                //     }
                // })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                    name='message-text'
                    color={color}
                    size={28}
                  />
                    )
                }}/>
                <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                    name='account'
                    color={color}
                    size={28}
                  />
                    )
                }}/>
            </Tab.Navigator>
        )
    }
}



export default Main;
