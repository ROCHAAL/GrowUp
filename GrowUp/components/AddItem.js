import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput testID='test-placeholder'
        placeholder='Add Task...'
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} /> Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    top: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#0e9307',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default AddItem;
