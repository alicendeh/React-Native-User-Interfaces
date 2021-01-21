//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const Comp3 = () => {
    return (
        <View style={styles.container}>
            <Image style={{width:90,height:170}}
            resizeMode="stretch"
            source={require("./Asset/2.jpg")} />

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
export default Comp3;
