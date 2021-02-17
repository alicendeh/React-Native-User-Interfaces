//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const PlacesContainer = (props) => {
  return <View style={styles.placesContainer}>{props.children}</View>;
};

// define your styles
const styles = StyleSheet.create({
  placesContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 2,
    position: 'absolute',
    top: '45.8%',
    left: 0,
    right: 0,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
});

//make this component available to the app
export default PlacesContainer;
