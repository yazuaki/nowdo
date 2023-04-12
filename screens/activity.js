import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList,TextInput, TouchableOpacity} from "react-native"
import CustomInput from '../components/CustomInput';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addActivity } from '../components/store/activitySlice';
import { deleteActivity } from '../components/store/activitySlice';
  
const ActivityScreen = ( { navigation }) => {
  
    const activities = useSelector((state) => state.activity)
    const dispatch = useDispatch();
    const onSubmitActivity = () => {
        
        dispatch(
            addActivity({
                task: activity,
                location: location
            }),
            console.log('täs',activities)
        )
    }
    const onDelete = (id) => {
        dispatch(
            deleteActivity({
            id: id,
          })
        );
      };
    const [activity, setActivity] = useState('')
    const [location, setLocation] = useState('')

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text>{item.name}</Text>
                <Text>{item.location}</Text>
                <TouchableOpacity
          onPress={() => onDelete(item.id)}
        >
            <Text>{item.id}</Text>
        </TouchableOpacity>
            </View>
        )
        
    }
  return(
    <View style={styles.container}>
      <CustomInput 
        placeholder='Activity name'
        value={activity}
        setValue={setActivity} />
      <CustomInput
        placeholder='Activity location'
        value={location}
        setValue={setLocation} />
        <Button
        title="add"
        onPress={onSubmitActivity}/>
        <FlatList         
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ></FlatList>        
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        padding: 20,
        borderWidth: 5,
        borderColor: 'black'
    }
})
export default ActivityScreen