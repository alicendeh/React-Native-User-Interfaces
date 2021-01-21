//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Color from '../ColorTheme';
// create a component
const IconDisplay = () => {
  const IconDisplay = [
    {
      id: '1',
      name: 'slideshare',
      title: 'Verified',
      bottom: 'User',
    },
    {
      id: '2',
      name: 'clipboard',
      title: 'Roadtrip',
      bottom: 'Plan',
    },
    {
      id: '3',
      name: 'bowl',
      title: 'Breakfast',
      bottom: 'Included',
    },
  ];
  return (
    <FlatList
      contentContainerStyle={styles.flipContainer}
      keyExtractor={(item) => item.id}
      data={IconDisplay}
      renderItem={({item}) => {
        return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name={item.name}
              size={30}
              color={Color.otherColor}
              style={{marginRight: 10}}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{paddingVertical: 2}}>{item.title}</Text>
              <Text>{item.bottom} </Text>
            </View>
          </View>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
  },
  flipContainer: {
    flex:1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,

  },
});

//make this component available to the app
export default IconDisplay;
