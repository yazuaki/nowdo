import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, FlatList, TextInput, Alert } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { ActivitySlice } from './store/activitySlice';


  const CustomAdd = ({navigation}) => {

    const dispatch= useDispatch()

    const [textInput, setTextInput] = React.useState({
      name:'',
      location:''
    })

   const handleOnChange = (text, textInput ) => {
    setTextInput(prevState => ({...prevState, [textInput]: text}))
   }

   const AddLfm = () => {
    if(textInput.name, textInput.location == ''){
      Alert.alert('error', 'Pleace input Name')
    } else {  
    const newLfm={
      name: textInput.name,
      location: textInput.location,
    };
    setLfm([...lfm, newLfm]);
    setTextInput({name:'', location:''})
  }
   }
  return(
    <View style={styles.container}>
      <View style={styles.form}>
         <TextInput
          style={styles.input}
          value={textInput.name}
          placeholder="Name of what are you looking for"
          onChangeText={(text)=>handleOnChange(text,"name")}
         />
         <TextInput
          style={styles.input}
          value={textInput.location}
          placeholder="Place where to go"
          onChangeText={(text)=>handleOnChange(text,"location")}
         />
        <TouchableOpacity onPress={() =>(
          dispatch(ActivitySlice.actions.addLfm(AddLfm))
        )}>
          <Text>Add</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ListItem:{
    padding:90,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 30,
    marginVertical: 20,
    marginHorizontal: 35,
    justifyContent:'space-between'
  },
  Listbox:{
    backgroundColor: 'green',
    position:'absolute',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 30,
    height: 120,
    width: 100,
    left: -20,
    top: -10,
  },
  listContent:{
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    left: 130
  },
  listbutton:{
    alignItems:'center',
    // backgroundColor: 'black',
    justifyContent: 'center',
    position: 'absolute',
    top: 130,
    left: 230

  },
  button:{
    height: 35,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    margin: 5
  },
  container:{
    flex: 1,
    backgroundColor: "#fff",
  },
  form:{
    justifyContent:'space-around'
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 30,
  },
})
export default CustomAdd