//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Disp2Title from "./Disp2Title"
import Disp2Stack from "./Overall2ndDisp"

// create a component
const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Disp2Title title="What We´re Playing" />
            <Disp2Stack/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
    },
});

//make this component available to the app
export default MyComponent;
