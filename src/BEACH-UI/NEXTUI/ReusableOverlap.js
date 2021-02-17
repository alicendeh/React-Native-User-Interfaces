//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ReusableOverlap = (props) => {
  return (
    <View style={{...styles.ReusableContainer, ...props.style}}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  ReusableContainer: {
    width: 36,
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

//make this component available to the app
export default ReusableOverlap;
