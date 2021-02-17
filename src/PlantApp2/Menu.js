//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 21, fontWeight: 'bold'}}>Outdoor</Text>
      <Text style={styles.txt}>Indoor</Text>
      <Text style={styles.txt}>Top</Text>
      <Icon name="arrow-right" color="white" size={21} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Dimensions.get('window').width > 400 ? 70 : 27,
    paddingHorizontal: 9,
  },
  txt: {
    fontSize: 21,
    color: 'white',
  },
});

//make this component available to the app
export default Menu;
