//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

// create a component
const ImageStack = () => {
  return (
    <View style={styles.container}>
      <View style={styles.disp1}>
        <View>
          <Image source={{uri: 'https://cutt.ly/DjGRoOX'}} style={styles.img} />
        </View>
        <View style={{}}>
          <View
            style={{
              height: '48%',
              width: Dimensions.get('window').width * 0.4,
              marginHorizontal: 8,
            }}>
            <Image
              source={{uri: 'https://cutt.ly/tjGOZmy'}}
              style={styles.img1}
            />
          </View>
          <View style={{height: '48%', margin: 8}}>
            <Image
              source={{uri: 'https://cutt.ly/jjGOTLJ'}}
              style={styles.img2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  disp1: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: Dimensions.get('window').width * 0.4,
    marginHorizontal: 8,
    height: '95%',
    borderRadius: 12,
  },
  other: {
    backgroundColor: 'red',
  },
  img1: {
    borderRadius: 12,
    height: 120,
  },
  img2: {
    borderRadius: 12,
    height: 110,
  },
});

//make this component available to the app
export default ImageStack;
