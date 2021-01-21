//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageComp from './ImageComp';
import IconDisplay from './IconsDisplay';
import JunkText from './JunkText';

// create a component
const MainApp = () => {
  return (
    <View style={styles.container}>
      <ImageComp />
      <IconDisplay />
      <JunkText />
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
  },
});

//make this component available to the app
export default MainApp;
