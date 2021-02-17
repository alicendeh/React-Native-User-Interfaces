//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 29, fontWeight: 'bold'}}>Plants</Text>
      <Icon name="dots-three-horizontal" size={24} color="white" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: Dimensions.get('window').width > 400 ? '-30%' : '-120%',
    paddingLeft: Dimensions.get('window').width > 400 ? 70 : 27,
    paddingVertical: 18,

    paddingHorizontal: 9,
  },
});

//make this component available to the app
export default Header;
