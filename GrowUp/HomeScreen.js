import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import TaskScreen from './TaskScreen';

const HomeScreen = ({ route, navigation}) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });

  // const progress = () => {
  //   let completedItemsCounter = 0
  //   items.map((item) => {
  //     if (item.completed === true) {
  //       completedItemsCounter += 1
  //     }
  //   })
  //   return './gifs/grow_up_' + ((completedItemsCounter * 100)/(items.length)).toString() + '_progress.gif'
  // };
  React.useEffect(() => {
      if (route.params?.completedItems) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
      }
    }, [route.params?.completedItems]);
  if (route.params.completedItems===null) {
    var gif = require('./gifs/grow_up_0_progress.gif');
  } else if (route.params.completedItems===1) {
    var gif = require('./gifs/grow_up_10_progress.gif');
  } else if (route.params.completedItems===2) {
    var gif = require('./gifs/grow_up_20_progress.gif');
  } else if (route.params.completedItems===3){
    var gif = require('./gifs/grow_up_30_progress.gif');
  } else if (route.params.completedItems===4){
    var gif = require('./gifs/grow_up_40_progress.gif');
  } else if (route.params.completedItems===5){
    var gif = require('./gifs/grow_up_50_progress.gif');
  } else if (route.params.completedItems===6){
    var gif = require('./gifs/grow_up_60_progress.gif');
  } else if (route.params.completedItems===7){
    var gif = require('./gifs/grow_up_70_progress.gif');
  } else if (route.params.completedItems===8){
    var gif = require('./gifs/grow_up_80_progress.gif');
  } else if (route.params.completedItems===9){
    var gif = require('./gifs/grow_up_90_progress.gif');
  } else if (route.params.completedItems>9){
    var gif = require('./gifs/grow_up_100_progress.gif');
  };


  importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      console.log(result);
      return result
      // console.log(result);
      // return result.map(req => JSON.parse(req));
    } catch (error) {
      console.error(error)
    }
  }

  const clearAllData = () => {
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => alert('success'));
  }

  // clearAllData();
  importData();
  // console.log(items);

  return (
    <View style={styles.container}>
       <Header />
       <Image source={gif} />
       <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  )


}
export default HomeScreen;
