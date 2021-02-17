//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ReusableOverlap from './ReusableOverlap';

// create a component
const OverlapImgs = () => {
  return (
    <View style={styles.container}>
      <ReusableOverlap>
        <Image source={require('../Assets/photo_4.jpeg')} style={styles.img1} />
      </ReusableOverlap>
      <ReusableOverlap style={styles.img2Div}>
        <Image source={require('../Assets/photo_5.jpeg')} style={styles.img1} />
      </ReusableOverlap>
    </View>
  );
};

const styles = StyleSheet.create({
  img1: {
    width: 35,
    height: 35,
    borderRadius: 70,
  },

  img2Div: {
    marginLeft: -8,
  },
  container: {
    flexDirection: 'row',
    paddingTop: 20,
  },
});

//make this component available to the app
export default OverlapImgs;
