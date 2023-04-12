import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, FlatList, TextInput, Alert } from "react-native"
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../components/AuthContext';

  const LoginScreen = ( { navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext)

  return(
    <ImageBackground source={require('../components/Image/girl.jpg')} style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}> Random People Finder</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imput}>
      <CustomInput 
        placeholder='Username' 
        value={username} 
        setValue={setUsername}/>
      <CustomInput 
        placeholder='Password' 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}/>
        <CustomButton text='Sign In' onPress={() => navigation.navigate('Home')} />
        <CustomButton 
          text='Forgot password' 
          onPress={() => navigation.navigate('Home')}
          type="TERTIARY" />
      <CustomButton text='login' onPress={() => {login()}} />
      </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    resizeMode: 'contain',
    // height: '70%',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',

  },
  header:{
    flex:0.7,
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    elevation: 12,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  imput:{
    marginTop: 30,
    width: '90%'
  }

})
export default LoginScreen