//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1 from './HoomeStack';
import Tab2 from './/DeatilStack';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
// create a component

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator activeColor="white">
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          //   tabBarColor: '#009387',

          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarColor: 'red',
          tabBarLabel: 'About',
        }}
      />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default BottomTab;
