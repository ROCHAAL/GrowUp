import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import TaskScreen from './TaskScreen';

const HomeScreen = () => {
  const navigation = useNavigation()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });

  return (
    <View style={styles.container}>
       <Header />
       <Image source={require('./gifs/grow_up_10_progress.gif')} />
       <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  )


}

export default HomeScreen;
