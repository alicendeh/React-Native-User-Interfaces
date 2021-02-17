//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Disp2Title = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.layout1}>
               
            </View>
            <View style={styles.layout2} >
             <Text style={{fontSize:21,fontWeight:"bold"}}>{props.title} </Text>
             <Text style={{color:"blue",fontSize:18}} >See All</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:"98%",
        paddingVertical:20
    },
    layout1:{
        borderTopWidth:0.5,
        borderTopColor:"black",
       
        
    },
    layout2:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:8
    }
});

//make this component available to the app
export default Disp2Title;
