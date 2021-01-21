//import liraries
import React, {Component} from 'react';
import {Children} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const ReusablePlacesStack = (props) => {
  return (
    <View style={{...styles.container, ...props.styles}}>{props.children}</View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 15,
    width: '100%',
    height: 500,
    marginBottom: -190,
  },
});

//make this component available to the app
export default ReusablePlacesStack;
