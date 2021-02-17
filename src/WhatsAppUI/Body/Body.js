//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RChat from "./RChat"
// create a component
const Body = () => {
    return (
        <View style={styles.container}>
            <RChat/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Body;
