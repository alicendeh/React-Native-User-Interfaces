//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Entypo"
// create a component
const Header = () => {
    return (
        <View style={styles.container}>
           <View >
               <Text  style={{fontSize:25,color:"blue"}}>Edit</Text>
            </View>
           <View>
               <Text style={{fontSize:25}}>Chats</Text>
            </View>
           <View><Icon name="new-message" size={27} color="blue" /></View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems:"center",
        width:"100%",
        height:70,
        backgroundColor:"#f6f6f9",
        borderBottomColor:"grey",
        borderBottomWidth:0.7
    },
});

//make this component available to the app
export default Header;
