//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ImageStack from './ImageStack';

// create a component
const Comp3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.disp1}>
        <View style={styles.subDisp1}>
          <Image source={{uri: 'https://cutt.ly/SjGvDWG'}} style={styles.img} />
          <View style={{paddingHorizontal: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Elon Musk</Text>
            <Text>1 hour Ago</Text>
          </View>
        </View>
        <View>
          <Icon name="dots-three-horizontal" size={25} />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, padding: 8}}>
          My Collection
        </Text>
        <Icon name="feather" size={24} color="green" style={{padding: 8}} />
      </View>
      <ImageStack />
      <View
        style={{
          height: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
        }}>
        <Icon name="heart" size={25} />
        <Icon name="message" size={25} />
        <Icon name="share" size={25} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 15,
    marginBottom: 30,
    padding: 12,
    borderRadius: 15,
  },
  disp1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  subDisp1: {
    flexDirection: 'row',
  },
  disp1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default Comp3;
