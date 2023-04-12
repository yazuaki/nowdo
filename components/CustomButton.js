import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList, TextInput, Alert, Pressable } from "react-native"

  const customButton = ({onPress, text, type ="PRIMARY"}) => {
    
  return(
    <Pressable onPress={onPress} 
        style={[styles.container, styles[`container_${type}`]]}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems:'center',
    borderRadius: 5,
  },
  container_PRIMARY:{
    backgroundColor: '#3B71F3',
  },
  container_TERTIARY:{

  },
  text:{
    fontWeight:'bold',
    color: 'grey'
  }

})
export default customButton