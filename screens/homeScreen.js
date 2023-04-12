import React, {useContext} from 'react';
import { View, StyleSheet, Text, } from "react-native"
import { AuthContext } from '../components/AuthContext';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
    const {logout} = useContext(AuthContext)
  return (
    <View>
        <Text>moi</Text>
        <CustomButton text='signup' onPress={() => navigation.navigate('Activity')} />
        <CustomButton text='main' onPress={() => navigation.navigate('Main')} />
        <CustomButton text='logout' onPress={() => {logout()}} />

    </View>
  );
};

export default HomeScreen;