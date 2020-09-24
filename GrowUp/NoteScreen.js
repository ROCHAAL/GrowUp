import React, {useState} from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const NoteScreen = () => {
  const navigation = useNavigation()

  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });

  return (

          <TextInput testID='test-placeholder'
            placeholder='Add Task...'
            style={styles.input}
            onChangeText={onChange}
            value={text}
          />
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

export default NoteScreen ;
