//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>I am the home page,tyhe main GGGG</Text>
      <Button
        title="click me sha"
        onPress={() => navigation.navigate('Footer')}
      />
    </View>
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
export default Home;
