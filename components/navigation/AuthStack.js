import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/loginScreen';
import LandingScreen from '../../screens/landingScreen';
import SignupScreen from '../../screens/signupScreen';

const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="landing" component={LandingScreen}/>
      <Stack.Screen name="SignIn" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>

    </Stack.Navigator>
  );
};

export default AuthStack;