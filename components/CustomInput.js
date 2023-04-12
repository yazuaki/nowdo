import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, FlatList, TextInput, Alert } from "react-native"

  const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    
  return(
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },

})
export default CustomInput