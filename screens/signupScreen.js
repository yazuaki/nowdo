import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView,ImageBackground, Image, FlatList, TextInput, Alert } from "react-native"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser } from '../components/store/redux/userSlice';
import { signupUser } from '../components/store/redux/authSlice';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../components/AuthContext';



  const SignupScreen = ( { navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)

    const Users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const createNewUser = () => {
        dispatch(
            addUser({
                email: email,
                password: password
            }),
            console.log('täs',Users)
        ), login()
}   

  return(
    <ImageBackground source={require('../components/Image/girl.jpg')}  style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}> Random People Finder</Text>
      </View>
      <View style={styles.content}>
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Sign up</Text>
        <View style={styles.imput}>
      <CustomInput 
        placeholder='Username' 
        value={email} 
        setValue={setEmail}/>
      <CustomInput 
        placeholder='Password' 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}/>
        <CustomButton text='Sign In' onPress={createNewUser} />
    </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    resizeMode: 'contain',
    height: '70%',
    backgroundColor: 'rgba(52, 52, 52, 0.9)',

  },
  header:{
    flex:1,
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
    marginTop: 60,
    width: '90%'
  }
})
export default SignupScreen