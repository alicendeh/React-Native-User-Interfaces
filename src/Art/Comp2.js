//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Comp3 from './Comp3';

// create a component
const Comp2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.disp1}>
        <Text style={styles.txt1}>movies watched</Text>
        <Text style={styles.txt2}>see all</Text>
      </View>
      <Comp3 />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  disp1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    color: 'white',
    fontSize: 21,
    textTransform: 'capitalize',
  },
  txt2: {
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
    padding: 6,
  },
});

//make this component available to the app
export default Comp2;
