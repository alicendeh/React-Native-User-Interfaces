//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView,StatusBar} from 'react-native';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}  >
           
      <Comp1 />
      <Comp2 />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;
