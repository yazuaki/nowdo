import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native"
import CustomButton from '../components/CustomButton';

  const LandingScreen = ( { navigation }) => {

  return(
    <ImageBackground source={require('../components/Image/girl.jpg')} style={styles.container}>
    <View style={styles.innerContainer}>
        <View style={styles.header}>
            <Text style={{fontSize:30, fontWeight:'bold' }}>Random people finder</Text>
        </View>
    
        <View style={styles.footer}>
        <CustomButton 
          text='Sign in' 
          onPress={() => navigation.navigate('SignIn')}
        //   type="TERTIARY"
           />
      <CustomButton text='Sign Up' onPress={() => navigation.navigate('Signup')} />
      <TouchableOpacity>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Conitnue as guest</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    resizeMode: 'cover',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 30,
  },
  footer:{
    flex:1,
    marginTop: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },

})
export default LandingScreen