import React, {useContext, useState} from 'react';
import { View, StyleSheet, Text, FlatList,SafeAreaView, TouchableOpacity, Alert, Modal } from "react-native"

const users = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      email: 'peke@gmail.com',
      name: 'pekka',
      title: 'title',
      age: '9',
        location: 'Joensuu'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      email: 'deke@gmail.com',
      name: 'Jukka',
      age: '19',
        location: 'Joensuu'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      email: 'jeke@gmail.com',
      name: 'Sukka',
      age: '39',
        location: 'Joensuu'
    },
  ];


  const getItem = (name, id, location) => {
  
    Alert.alert(name, id,location);    

   }
  
  const ProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
      id => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
        setSelected(newSelected);
      },
      [selected],
    );

      const item = ({item, name, selected, onSelect}) => (
        <View>
        <TouchableOpacity onPress={()=> getItem(item.name, item.email)} style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          
        </TouchableOpacity>
        </View>
      );
      function Item({ id, title,age, location, name,selected, onSelect }) {
        return (
          <View>
          <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
              styles.item,
              { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
          >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{name}</Text>
          </TouchableOpacity>
          <Modal
        animationType="slide"
        transparent={true}
        visible={selected}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(handleOnCloseModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{name}</Text>
            <Text style={styles.modalText}>{age}</Text>
            <Text style={styles.modalText}>{location}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(onSelect(id))}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
          </View>
        );
      }


    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={users}
          // renderItem={Item}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              name={item.name}
              age={item.age}
              location={item.location}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          extraData={selected}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
  });
export default ProfileScreen;