//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// create a component
const RCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.disp1}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.clr,
            width: 30,
            borderRadius: 50,
            height: 30,
            marginVertical: 18,
            marginHorizontal: 12,
          }}>
          <Icon name={props.IName} size={20} />
        </View>
        <View style={styles.disp2}>
          <Text style={{fontSize: 21}}>{props.title}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            {props.num}
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  disp1: {
    width: 180,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  disp2: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
});

//make this component available to the app
export default RCard;
