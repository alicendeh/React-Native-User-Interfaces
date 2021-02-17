//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const B_TAN = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="View Buttom  Tabs" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default B_TAN;
