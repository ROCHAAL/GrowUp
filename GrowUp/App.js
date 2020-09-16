import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([
      {id: uuidv4(), text: 'Sweep'}
    ]);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
