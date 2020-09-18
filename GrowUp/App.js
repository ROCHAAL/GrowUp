import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
  ]);

  const Stack = createStackNavigator();

  function HomeScreen() {
    return (
      <View style={styles.container}>
         <Header />
         <AddItem addItem={addItem} />
         <FlatList
           data={items}
           renderItem={({item}) => <ListItem completeItem={completeItem} item={item} deleteItem={deleteItem} />}
         />
      </View>
    )
  }

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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Header />
    //   <AddItem addItem={addItem} />
    //   <FlatList
    //     data={items}
    //     renderItem={({item}) => <ListItem completeItem={completeItem} item={item} deleteItem={deleteItem} />}
    //   />
    // </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
