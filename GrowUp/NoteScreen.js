import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

import Header from './components/Header';
import ListNote from './components/ListNote';
import AddNote from './components/AddNote';

const NoteScreen = () => {
  const navigation = useNavigation()


  const [notes, setNotes] = useState([]);

  React.useEffect(() => {
  }, []);

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id != id);
    });
  }

  const addNote = text => {
    if(!text) {
      Alert.alert('Error', 'Please enter a task', {text: 'Ok'})
    } else {
      setNotes(prevNotes => {
        var entry = {id: uuidv4(), text}
        var result = [entry, ...prevNotes];
        return result
      });
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
    },
    button: {
      marginBottom: 40,
      alignItems: 'center',
      bottom: 0,
      backgroundColor: '#0e9307',
      borderRadius: 100,
      width: '25%',
      left: 155,
    }
  });

  console.log(notes);

  return (
    <View style={styles.container}>
       <Header />
       <AddNote addNote={addNote} />
       <FlatList
         data={notes}
         renderItem={({item}) => <ListNote key={item.id} note={item} deleteNote={deleteNote} />}
       />
       <View style={styles.button}>
           <Button
            color='white'
            title="Go Home"
            onPress={() => navigation.navigate('Task')}
          />
        </View>

    </View>
  )
}


export default NoteScreen;
