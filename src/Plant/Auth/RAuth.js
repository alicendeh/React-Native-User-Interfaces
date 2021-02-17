//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
// create a component
const RAuth = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Icon name={props.iconName} color="white" size={20}/>
                <View style={{
                    alignItems:"center",
                    justifyContent:"center"                    
                }}>
                <Text style={{color:"white",fontSize:17,textAlign:"center"}}>Continue with {props.name}</Text>

                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding:7,
        flex: 1,
        alignItems:"center",
    
    },
    box:{
    
        flexDirection:"row",
        backgroundColor:"black",
        padding:10,
        justifyContent:"space-around",
        width:260,
        borderRadius:7
        
    }
});

//make this component available to the app
export default RAuth;
