//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const InnerImg = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://cutt.ly/9jJ6Zvs'}}
        style={{
          width: '80%',
          height: '80%',
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: '40%',
    borderRadius: 89,
    backgroundColor: '#6fc091',
    marginHorizontal: '10%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default InnerImg;
