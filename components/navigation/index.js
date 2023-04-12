import React, { useContext } from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading) {
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack/> }
        </NavigationContainer>
    )
}

export default Navigation