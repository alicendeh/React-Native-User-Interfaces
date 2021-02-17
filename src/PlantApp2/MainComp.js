//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Header from './Header';
// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteView}></View>
      <View style={styles.greenView}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '65%',
    flexDirection: 'row',
  },
  whiteView: {
    backgroundColor: 'white',
    width: '40%',
    height: Dimensions.get('window').width > 400 ? '140%' : '100%',
  },
  greenView: {
    backgroundColor: '#5c7c50',
    width: '60%',
    height: Dimensions.get('window').width > 400 ? '140%' : '100%',
  },
});

//make this component available to the app
export default MyComponent;
