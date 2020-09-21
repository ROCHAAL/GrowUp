import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const TaskScreen = () => {
  const navigation = useNavigation()

  const [items, setItems] = useState([
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if(!text) {
      Alert.alert('Error', 'please enter a task', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text, completed: false}, ...prevItems];
      });
    }
  }

  const completeItem = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if(id === item.id) {
          item.completed = !item.completed
        }
        return item;
      });
    });
  }
  const completedItems = () => {
    let completedItemsCounter = 0
    items.map((item) => {
      if (item.completed === true) {
        completedItemsCounter += 1
      }
    });
    return completedItemsCounter
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });

  return (
    <View style={styles.container}>
       <Header />
       <AddItem addItem={addItem} />
       <FlatList
         data={items}
         renderItem={({item}) => <ListItem completeItem={completeItem} item={item} deleteItem={deleteItem} />}
       />
       <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home', {completedItems: completedItems})}
      />
    </View>
  )
}

export default TaskScreen;
