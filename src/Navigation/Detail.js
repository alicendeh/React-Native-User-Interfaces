//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>I am the details screen</Text>
      <Button title="Go to home screen" onPress={() => navigation.goBack()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Detail;
