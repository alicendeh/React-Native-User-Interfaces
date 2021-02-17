//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: 'black'}}>Hello Bezos!</Text>
      <Image source={{uri: 'https://cutt.ly/GjGdx1d'}} style={styles.img} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

//make this component available to the app
export default MyComponent;
