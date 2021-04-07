//import react
import React, { Component } from 'react';
//import react-native
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
//import react-native maps
import MapView, { Marker } from "react-native-maps";

import { SearchBar } from 'react-native-elements';

import { StatusBar } from 'expo-status-bar';



export class Map extends Component {
    constructor(props){
        super(props);

       
        this.state = {
            markers: [{
              title: 'open meter',
              coordinates: {
                latitude: 40.81570649182924,
                longitude: -96.70866187310672
              },
            },
            {
              title: 'open meter',
              coordinates: {
                latitude: 40.81525647700707,
                longitude: -96.70974496041079
              },  
            }]
          }
}
    render() {
      
    return (
      
        
        <View style={styles.container}>
         
          
          <View style={styles.search}>
          <SearchBar  containerStyle={{backgroundColor: '#fff'}} platform={Platform.OS}
          clearIcon={true} inputContainerStyle={{backgroundColor:'#fff'}}
          inputStyle={{backgroundColor: '#fff'}} buttonStyle={{}} placeholder="Current Location"/>
         
          </View>
          
          <StatusBar style="dark" />
            <MapView style={styles.mapview} 
                showsUserLocation={true}
                showsBuildings={true}
                // followsUserLocation={true}
                initialRegion={{
                    latitude: 40.806862,
                    longitude: -96.681679,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.08
                  }}
                
            >
                {this.state.markers.map(marker => (
                 <Marker
                 key={Math.random().toString(36).substr(2, 5)}
                 coordinate={marker.coordinates}
                 title={marker.title}
                image={require("../../assets/meterLogo.png")}
                />
                ))}
           </MapView>
        </View>
        
   )
}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0,
      color: '#000'
    },
    heading:{
      marginTop: 0,
      fontSize: 30,
      marginBottom: 0,
      color: '#fff'
    },
    search: {
      width:'95%',
      color: '#fff',
      marginTop: 35,
      alignSelf: 'flex-start'
    },
    mapview: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flex: 1
    },
  });

  export default Map;
