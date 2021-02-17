//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../ColorTheme';
import Overlapimgs from './OverlapImgs';

const ImageComp = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', padding: 7}}>
        <ImageBackground
          imageStyle={{borderRadius: 35, marginVertical: 7}}
          source={{uri:"https://cutt.ly/ghMlyS4"}}
          style={styles.img}>
          <View style={styles.iconImage}>
            <Icon name="arrow-left" size={20} color="white" />
          </View>
          <View style={styles.bottomText}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 9,
              }}>
              $995
            </Text>
            <Text style={{fontSize: 27, color: 'white'}}>Get our into new</Text>
            <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
              Sea Heaven in Bali
            </Text>
            <View style={styles.sidedContainer}>
              <Overlapimgs />
              <Text
                style={{
                  color: 'white',
                  marginHorizontal: 12,
                  paddingTop: 26,
                  fontSize: 15,
                }}>
                Sofie,Lauren + 13 more
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  iconImage: {
    width: '10%',
    height: '10%',
    borderRadius: 90,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  img: {
    width: '100%',
    height: '97%',
  },
  bottomText: {
    marginTop: 'auto',
    padding: 30,
    // backgroundColor:'red'
  },
  sidedContainer: {
    flexDirection: 'row',
  },
  container: {
    height: '60%',
  },
});

//make this component available to the app
export default ImageComp;
