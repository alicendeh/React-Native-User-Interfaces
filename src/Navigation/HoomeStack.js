//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import Home from './Home';
const HomeStack = createStackNavigator();
const MyHomeStack = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: 'teal',
          },

          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => (
            <Icon
              name="menu"
              size={20}
              color="white"
              backgroundColor="teal"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
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
export default MyHomeStack;
