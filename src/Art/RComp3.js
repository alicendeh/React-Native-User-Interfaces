//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

// create a component
const Comp3 = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: Dimensions.get('window').width * 0.3, height: 170}}
        resizeMode="stretch"
        source={props.img}
      />
      <Text style={{color: 'white', fontSize: 20, padding: 5}}>
        {props.title}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

//make this component available to the app
export default Comp3;
