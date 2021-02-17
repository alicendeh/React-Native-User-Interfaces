//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const SumChat = (props) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width:18,
            backgroundColor: props.clr||"white" ,
            borderRadius:50,
            marginBottom:-8,
            marginLeft:9,
        }}>
            <Text style={{color:"white",fontSize:12}}> {props.myChat} </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
      

    },
});

//make this component available to the app
export default SumChat;
