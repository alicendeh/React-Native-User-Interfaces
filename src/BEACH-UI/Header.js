//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './ColorTheme';
import EntoIcons from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <Icon name="arrow-left" size={20} color={Color.iconColors} />
      </View>
      <View style={styles.imgContainer}>
        <Image source={require('./Assets/images.jpeg')} style={styles.img} />
      </View>

      <View style={styles.headerIcon}>
        <EntoIcons
          name="dots-three-horizontal"
          size={25}
          color={Color.iconColors}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  imgContainer: {
    width: 56,
    height: 56,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'red',
    borderColor: Color.mainColor,
    borderWidth: 3,
    backgroundColor: '#fff',
  },
  headerIcon: {
    marginHorizontal: 28,
  },
});

//make this component available to the app
export default Header;
