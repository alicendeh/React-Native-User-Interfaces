//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import ScrollMenu from './ScrollMenu';
import ImageDisp from './ImageSDisp';
// create a component
const Plant3 = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollMenu />
      <ImageDisp />
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
export default Plant3;
