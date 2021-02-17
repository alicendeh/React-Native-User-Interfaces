//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from  './Header'
import Footer from './Footer'
import Body from './Body/MainBodyRender'

// create a component
const App = () => {
  return (
    <View style={styles.container}>
       <Header/>
       <View style={{flex:1}}>
         <Body/>
       </View>
       <Footer/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
