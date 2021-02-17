//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5"

// create a component
const Footer = () => {
    const IconData = [
        {
            name:"bookmark",
            txt:"Todat"
        },
        {
            name:"gamepad",
            txt:"Games",
            color:"blue",
            myChat:63,
           
        },
        {
            name:"modx",
            txt:"Apps"
        },
        {
            name:"ravelry",
            txt:"Arcade",
           
        },
        {
            name:"search",
            txt:"Search"
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList
            keyExtractor = {(item)=>item.txt}
            contentContainerStyle={{
                flexDirection:"row",
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal:15,
                paddingVertical:8
            }}
            data={IconData}
            renderItem = {({item})=>{
                return (
                    <View style={styles.cont} >
                        <Icon name={item.name} color={item.color||"grey"} size={Dimensions.get("window").width>700?20:25} />
                        <Text style={{padding:4}}>{item.txt} </Text>
                    </View>
                )
            }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        width:"100%",
        height:Dimensions.get("window").height > 320 ? 55 : 55  
    },
    cont:{
        justifyContent:"center",
        alignItems:"center",
        
    }
});

//make this component available to the app
export default Footer;
