import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, FlatList, TextInput, Alert } from "react-native"
import Navigation from './components/navigation';
import { Provider } from 'react-redux';
import { store } from './components/store/index';
import { AuthProvider } from './components/AuthContext';

  const App = () => {

  return(  
      <Provider store={store}>       
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </Provider>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

})
export default App