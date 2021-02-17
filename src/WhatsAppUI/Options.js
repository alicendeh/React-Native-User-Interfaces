//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

// create a component
const Options = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.txt} >Broadcast Lists</Text>
            </View>
            <View>
                <Text style={styles.txt} >New Group</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        height:55,
        borderBottomWidth:0.5,
        borderBottomColor:"black",
        padding:12,
        width:"100%"
    },
    txt:{
        color:"blue",
        fontSize:Dimensions.get("window").width*0.05
    }
});

//make this component available to the app
export default Options;
