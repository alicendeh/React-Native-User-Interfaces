//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const Header = () => {
  return (
    <View style={styles.container}>
      <View >
      <Text style={styles.headerIcon}>JuiceUP</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require('../BEACH-UI/Assets/TT.jpg')} style={styles.img} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   margin:20,


   
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 12,
  },

  headerIcon: {
   color:'white',
   fontSize:20
  },
});

//make this component available to the app
export default Header;
