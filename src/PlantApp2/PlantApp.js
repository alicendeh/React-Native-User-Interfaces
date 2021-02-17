//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MainApp from '../BEACH-UI/NEXTUI/MainApp';
import Header from './Header';
import MainComp from './MainComp';
import Menu from './Menu';
import PlantBox from './PlantBox';
import Btn from './Btn';
import LastComp from './LastComp';
import Det from './Det';
import ScrollMenu from '../Plant/Part3/ScrollMenu';
// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <MainComp />
      <Header />
      <Menu />
      <PlantBox />
      <Btn />
      <LastComp />
      <Det />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;
