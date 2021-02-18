//import react
import React, { useState } from 'react';
//import react-native
import { Text, View, Button, TouchableHighlight, SafeAreaView, StatusBar, ScrollView, Dimensions, Image, PixelRatio, StyleSheet, ImageBackground } from 'react-native';
//import vector-icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import react-native-gesture-handler
import { TouchableOpacity } from 'react-native-gesture-handler';

//Landing functional component
export default function Landing( { navigation } ) {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  //welcome slides
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          {/* Screen 1 */}
          <View style={{width, height}}>
            <View style={{height:350}}>
            <Text style={{fontSize:38, textAlign:'center', marginTop:'30%', color:'#2b3e50'}}>MeterSp<MaterialCommunityIcons name="map-marker-radius" size={34} color="black" />t</Text>
              <Image source={require('../../assets/landing-page-1.png')} style={styles.imageStyle} />
              <Text style={{fontSize:20, marginBottom:20, paddingLeft:60, paddingRight:60, textAlign: 'center'}}>MeterSpot makes it easy to find an open parking meter.</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register') }>
              <View style={styles.button}>
                <Text style={{textAlign:'center', color:'#fff', fontSize: 20, fontWeight: '600'}}>Get Started</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login') }>
              <View style={styles.button2}>
                <Text style={{textAlign:'center', color:'#2b3e50', fontSize: 20, fontWeight: '600'}}>Login</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* screen 2 */}
          <View style={{ width, height }}>
          <View style={{height:350}}>
            <Text style={{fontSize:38, textAlign:'center', marginTop:'30%'}}>MeterSp<MaterialCommunityIcons name="map-marker-radius" size={36} color="black" />t</Text>
              <Image source={require('../../assets/landing-page-2.png')} style={styles.imageStyle} />
              <Text style={{fontSize:20, marginBottom:20, paddingLeft:80, paddingRight:80, textAlign: 'center'}}>MeterSpot can help save you time and money!</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register') }>
              <View style={styles.button}>
                <Text style={{textAlign:'center', color:'#fff', fontSize: 20, fontWeight: '600'}}>Get Started</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login') }>
              <View style={styles.button2}>
                <Text style={{textAlign:'center', color:'#2b3e50', fontSize: 20, fontWeight: '600'}}>Login</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* pagination dots */}
        <View style={styles.paginationWrapper}>
          {Array.from(Array(2).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      </SafeAreaView>
    </>
        
    )
}


const styles = StyleSheet.create({
  imageStyle: {
    height: '100%',
    width: '100%',
    margin: 'auto'
  },
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
  },
  button2: {
    backgroundColor: '#fff',
    padding: 15,
    marginLeft: '25%',
    marginRight: '25%',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#2b3e50',
    marginLeft: 10,
  },
})