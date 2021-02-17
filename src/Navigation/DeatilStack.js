//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from './Detail';
import Icon from 'react-native-vector-icons/Entypo';

const DetailStack = createStackNavigator();
const MyDetailStack = ({navigation}) => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="Detail"
        component={Detail}
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
    </DetailStack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyDetailStack;
