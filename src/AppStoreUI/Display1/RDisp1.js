//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native';

// create a component
const MyComponent = (props) => {
    return (
        <View style={{
            width:Dimensions.get("window").width*0.9,
            height:280,
           

        
        }}>
            <View style={styles.layout1}>
                <Text style={{
                    fontSize:13,
                    textTransform:"uppercase",
                    color:"blue"
                    }}>{props.cartonSeason}</Text>
                <Text style={{
                    fontSize:21,
                    textTransform:"capitalize"
                    }}>{props.cartonName} </Text>
                <Text style={{
                    fontSize:18,
                    
                    color:"#8a8a8e"
                    }}>{props.cartonSujest}</Text>
            </View>
            <View style={styles.layout2}>
                <Image source={props.img} style={{
                    borderRadius:12,
                    width:Dimensions.get("window").width*0.85,
                    height:205,
                
                }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      

    },
    layout1:{
        // paddingHorizontal:15,
        width:"100%",
        height:75,
        justifyContent:"space-between",
        paddingBottom:7
    },
    layout2:{
        flex:1,
        
        // paddingHorizontal:15,

    }
});

//make this component available to the app
export default MyComponent;
