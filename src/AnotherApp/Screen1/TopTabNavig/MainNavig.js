//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Film from './NavigElem/Film';
import Music from './NavigElem/Music';
import Video from './NavigElem/Video';

// create a component

const Tab = createMaterialTopTabNavigator();

const MainNavig = () => {
  return (
    <View>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'white',
          indicatorStyle: {
            backgroundColor: 'pink',
          },
          style: {
            backgroundColor: '#667eac',
            paddingBottom: 3,
            borderColor: '#667eac',
            borderBottomWidth: 0.3,
            borderBottomColor: 'white',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Film}
          options={{title: 'Film Score', backgroundColor: 'red'}}
        />
        <Tab.Screen
          name="Music"
          component={Music}
          options={{title: 'Music Theatre'}}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{title: 'Video Quality'}}
        />
      </Tab.Navigator>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default MainNavig;
