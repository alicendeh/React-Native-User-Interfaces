//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ScrollViewBase} from 'react-native';
import Header from './Header';
import Term from './Term';
import Comp3 from '../COmp3/Comp3';
// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Term />
        <Comp3 />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#dcd0b9',
  },
});

//make this component available to the app
export default MyComponent;
