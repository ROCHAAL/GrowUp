import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'GrowUp!',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    top: 15,
    backgroundColor: '#0e9307',
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Chalkduster'
  }
});

export default Header;
