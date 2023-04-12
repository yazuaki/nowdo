import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity,Modal, FlatList, TextInput, Image } from "react-native"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Item} from './profileScreen'

const MainScreen = ({navigation}) => {

  const activities = useSelector((state) => state.activity)
    const dispatch = useDispatch();

   const renderItem = ({item, onSelect, id}) => {
    return <View style={styles.ListItem}>
      <View style={styles.listContent}>
        <View>
          <Text style={{fontSize:22, flexWrap: 'wrap'}}>{item.name}</Text>
        </View>
          <Text style={{fontSize:20, marginTop:10,}}>{item.location}</Text>
          <Text style={{position:'absolute', left: 5, top: 135,}}></Text>
         <Text>täs</Text>
        </View>
        <View style={styles.listbutton}>
          <TouchableOpacity style={styles.button} >
            <Text>join</Text>
          </TouchableOpacity>
        </View>
      </View>
   }

  return(
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={activities}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      />
      <View>
      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.footertxt} onPress={() => navigation.navigate('profile')}><Icon name="heart" size={30} color="#900"/></TouchableOpacity> 
      <TouchableOpacity style={styles.footertxt}><Icon name="trash" size={30} color="#900"/></TouchableOpacity>      
      <TouchableOpacity style={styles.footertxt}><Icon name="search" size={30} color="#900"/></TouchableOpacity>
      <TouchableOpacity style={styles.footertxt}><Icon name="home" size={30} color="#900"/></TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ListItem:{
    padding:5,
    marginTop:10,
    backgroundColor: '#f5f5f5',
    height: 190,
    width: 350,
    elevation: 12,
    borderRadius: 30,
    marginVertical: 15,
    marginHorizontal: 25,
  },
  Listbox:{
    backgroundColor: '#F5F5F5',
    position:'absolute',
    alignItems: 'center',
    justifyContent:'center',
    elevation: 12,
    borderRadius: 30,
    height: 170,
    width: 120,
    left: -25,
    top: -10,
  },
  profilebox:{
    marginBottom:20
  },
  img:{
    flex: 1
  },
  listContent:{
    backgroundColor: '#f5f5f5',
    alignItems:'center',
    marginTop:10
  },
  headertxt:{
    fontSize:25,
    flex: 1, 
    flexWrap: 'wrap',
    fontFamily: 'system-ui',
    fontWeight: 'bold',
    color: 'blue'
  },
  listbutton:{
    alignItems:'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 130,
    left: 200

  },
  button:{
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#379237',
    margin: 5
  },
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  footer:{
    width: '100%',
    height: 60,
    backgroundColor: '#b7c9e2',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    opacity:0.4
  },
  footertxt:{
    justifyContent: 'space-between',
    color: 'black'
  }
  
})
export default MainScreen