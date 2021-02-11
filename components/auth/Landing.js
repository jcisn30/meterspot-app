import React from 'react'
import { Text, View, Button, SafeAreaView, StatusBar, ScrollView, Dimensions, Image, PixelRatio, StyleSheet, ImageBackground } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Landing( { navigation } ) {
  const { width, height } = Dimensions.get('window');
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          {/* Screen 1 */}
          <View style={{width, height}}>
            <View style={{height:350}}>
            <Text style={{fontSize:38, textAlign:'center', marginTop:150, color:'#2b3e50'}}>MeterSp<MaterialCommunityIcons name="map-marker-radius" size={34} color="black" />t</Text>
              <Image source={require('../../assets/landing-page-1.png')} style={styles.imageStyle} />
              <Text style={{fontSize:18, marginBottom:20, paddingLeft:60, paddingRight:60, textAlign: 'center'}}>MeterSpot makes it easy to find an open parking meter.</Text>
              <Button 
              title='Get started'
              color='#2b3e50'
            />
            </View>
          </View>

          <View style={{ width, height }}>
          <View style={{height:350}}>
            <Text style={{fontSize:38, textAlign:'center', marginTop:150}}>MeterSp<MaterialCommunityIcons name="map-marker-radius" size={34} color="black" />t</Text>
              <Image source={require('../../assets/landing-page-2.png')} style={styles.imageStyle} />
              <Text style={{fontSize:18, marginBottom:20, paddingLeft:80, paddingRight:80, textAlign: 'center'}}>MeterSpot can help save you time and money!</Text>
              <Button 
              title='Get started'
              color='#2b3e50'
            />
            </View>
          </View>
        </ScrollView>
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
})