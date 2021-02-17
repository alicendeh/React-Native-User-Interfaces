//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Button
        title="click here to go to tab navig"
        onPress={() => navigation.navigate('B_TAB')}
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
export default MainScreen;
