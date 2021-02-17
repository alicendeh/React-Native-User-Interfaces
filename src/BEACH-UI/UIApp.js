//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Adventure from './Adventure';
import PlacesStack from './PlcacesStack';

const UIApp = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Adventure />
      <PlacesStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UIApp;
