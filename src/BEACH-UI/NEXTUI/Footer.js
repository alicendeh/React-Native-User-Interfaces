//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Color from '../ColorTheme';
// create a component
const Footer = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="heart"
          size={30}
          color="red"
          style={{
            backgroundColor: 'pink',
            borderColor: 'orange',
            borderRadius: 60,
            padding: 7,
          }}
        />
      </View>
      <View>
        <Icon
          name="flash"
          size={30}
          color="blue"
          style={{marginRight: 10}}
          style={{
            backgroundColor: '#ccddff',
            borderColor: 'orange',
            borderRadius: 60,
            padding: 7,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#c2f0f0',
          borderColor: '#248f8f',
          borderRadius: 20,
          padding: 5,
          width: 110,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1.5,
        }}>
        <Text
          style={{
            color: '#248f8f',

            fontWeight: 'bold',
          }}>
          BOOK NOW
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.5)',
    position: 'absolute',
    bottom: 0,
  },
});

//make this component available to the app
export default Footer;
