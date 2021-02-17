//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
const Btn = () => {
  return (
    <View style={styles.myCont}>
      <View style={styles.container}>
        <Icon name="arrow-right" color="white" size={30} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '15%',
    padding: Dimensions.get('window').width > 400 ? 15 : 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 15,
  },
  myCont: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: Dimensions.get('window').width > 400 ? '-12%' : '-45.8%',
    marginLeft: '-7%',
  },
});

//make this component available to the app
export default Btn;
