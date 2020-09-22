import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

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
        var entry = {id: uuidv4(), text, completed: false}
        storeData(entry)
        return [entry, ...prevItems];
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

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log(value.id)
      await AsyncStorage.setItem(value.id, jsonValue)
      console.log('store success')
    } catch (e) {
      console.log('save error')
    }
  }

  importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      const result = await AsyncStorage.multiGet(keys);
      console.log(result);
      return result
      // console.log(result);
      // return result.map(req => JSON.parse(req));
    } catch (error) {
      console.error(error)
    }
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

  importData();

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
