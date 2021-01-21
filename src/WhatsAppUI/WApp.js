//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "./Header"
import Options from "./Options"
import Body from "./Body/RChat"
import Footer from "./Footer"

// create a component
const WApp = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style ={{flex:1}} >
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

//make this component available to the app
export default WApp;
