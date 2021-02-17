//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import RAuth from './RAuth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const Comp1 = () => {
  const dataSet = [
    {
      name: 'github',
      title: 'github',
    },
    {
      name: 'facebook',
      title: 'facebook',
    },
    {
      name: 'google',
      title: 'google',
    },
  ];
  return (
    <ImageBackground
      source={{uri: 'https://cutt.ly/WjF9xwL'}}
      resizeMode="stretch"
      style={styles.container}>
      <View style={styles.disp1}>
        <Text style={{fontSize: 50}}>Name</Text>
        <View style={{padding: 8}}>
          <Text style={styles.txt}>A slogan of the app,how is </Text>
          <Text style={styles.txt}>This app helping the world</Text>
        </View>
      </View>
      <View style={{paddingTop: 50}}>
        <FlatList
          keyExtractor={(item) => item.title}
          data={dataSet}
          renderItem={({item}) => {
            return (
              <View>
                <RAuth iconName={item.name} name={item.title} />
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 15,
          }}>
          <Text style={{fontWeight: 'bold'}}>Already have an account ? </Text>
          <Text style={{color: 'blue'}}>SIGNUP</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  disp1: {
    height: '50%',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txt: {
    fontSize: 18,
    padding: 5,
  },
});

//make this component available to the app
export default Comp1;
