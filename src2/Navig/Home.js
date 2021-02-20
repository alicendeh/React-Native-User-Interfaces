//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import About from './About';
import Setting from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
import Screen1Ap from './About';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Screen1Ap}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="twitter"
              color={focused ? 'red' : 'purple'}
              size={focused ? 20 : 15}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="facebook"
              color={focused ? 'red' : 'purple'}
              size={focused ? 20 : 18}
            />
          ),
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
export default Home;
