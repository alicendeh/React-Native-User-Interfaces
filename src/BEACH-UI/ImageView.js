//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const ImageView = (props) => {
  return <Image source={{uri: props.img}} style={{...styles.displayImg}} />;
};

// define your styles
const styles = StyleSheet.create({
  displayImg: {
    height: '55%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

//make this component available to the app
export default ImageView;
