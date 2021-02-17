//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Disp2Title from "../Dispplay2/Disp2Title"
import Disp3Stack from "./Disp3Stack"
import Diisp3 from "./Disp3Stack"
// create a component
const Disp3 = () => {
    return (
        <View style={styles.container}>
         
            <Disp2Title title="Top Free Games" />
            <Diisp3/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      
    },
});

//make this component available to the app
export default Disp3;
