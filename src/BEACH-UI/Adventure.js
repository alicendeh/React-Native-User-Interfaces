//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from './ColorTheme';
// create a component
const Adventure = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 27}}>
        <Text style={{fontWeight: 'bold'}}>Discover </Text> new adventures
      </Text>
      <Text style={{fontSize: 19, color: Color.iconColors, paddingVertical: 7}}>
        More than 50 new adventures
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Adventure;
