import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../../screens/mainScreen';
import CustomAdd from '../CustomAdd';
import ActivityScreen from '../../screens/activity';
import HomeScreen from '../../screens/homeScreen';
import ProfileScreen from '../../screens/profileScreen';
// import SignupScreen from '../../screens/signupScreen';
// import LandingScreen from '../../screens/landingScreen';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        {/* <Stack.Screen name="Signup" component={SignupScreen}/> */}
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Add" component={CustomAdd}/>
        <Stack.Screen name="Activity" component={ActivityScreen}/>
        <Stack.Screen name="profile" component={ProfileScreen}/>
    </Stack.Navigator>
  );
};

export default AppStack;