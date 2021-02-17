//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Det = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>View Detail</Text>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'white',
            width: 31,
            height: 1,
            marginTop: 12,
            marginVertical: 5,
          }}></View>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'white',
            width: 7,
            height: 7,
            borderRadius: 50,
            marginTop: 10,
            marginVertical: 5,
          }}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderTopLeftRadius: 13,
    borderBottomRightRadius: 7,
    width: '40%',
    padding: 20,
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default Det;
