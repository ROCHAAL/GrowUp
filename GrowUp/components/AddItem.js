import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Task..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addItem(text)}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20}/> Add task
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default AddItem;
