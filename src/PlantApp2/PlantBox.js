//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

// create a component
const PlantBox = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./Assets/1.jpeg')}
        style={styles.img}
        resizeMode="stretch"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  img: {
    // width: '78%',
    // height: '65%',
    width: Dimensions.get('window').width > 400 ? '50%' : '78%',

    height: Dimensions.get('window').width > 400 ? '65%' : '65%',
    borderRadius: 12,
  },
});

//make this component available to the app
export default PlantBox;
