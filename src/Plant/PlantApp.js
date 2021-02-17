//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Comp3 from '../Art/Comp3';
import Comp1 from './Auth/Comp1';
import Comp2 from './Comp2/App2';
import Comp31 from './Part3/App3';
// create a component
const AppP = () => {
  return (
    <View style={styles.container}>
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
export default AppP;
