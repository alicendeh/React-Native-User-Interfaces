//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button, ImagePropTypes } from 'react-native';

// create a component
const RDisp2 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.lay1}>
                <Image source={props.img} style={{width:50,height:60,borderRadius:12}} />
                <View style={styles.Innerlay1}>
                    <Text style={{fontSize:17}} >{props.name}</Text>
                    <Text  style={{fontSize:12.5,color:"#333",padding:2}} > {props.sujest} </Text>
                </View>
            </View>
            <View style={styles.lay2}>
                <View style={{width:40,backgroundColor:"#ccc",alignItems:"center",marginRight:20,justifyContent:"center",borderRadius:8}}>
                    <Text style={{color:"blue"}}>GET</Text>
                 </View>    
                    <Text style={{paddingRight:9,fontSize:12,color:"#bbb852"}}>In-App Purchases</Text>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      justifyContent:"space-between",
      flexDirection:"row",
      width:380,
      paddingRight:9,
      borderBottomWidth:0.4,
      borderRightColor:"black",
      marginTop:9
    },
    lay1:{
        flexDirection:"row",
    },
    Innerlay1:{
        margin:10
    },
    lay2:{
        padding:10,
        alignItems:"flex-end",
        justifyContent:"space-between",
        height:65
        
    }    
});

//make this component available to the app
export default RDisp2;
