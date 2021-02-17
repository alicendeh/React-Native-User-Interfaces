//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5"
import SumChat from "./SumChat"
// create a component
const Footer = () => {
    const IconData = [
        {
            name:"eye",
            txt:"Status"
        },
        {
            name:"phone",
            txt:"Calls"
        },
        {
            name:"camera",
            txt:"camera"
        },
        {
            name:"sms",
            txt:"Chats",
            color:"blue",
            myChat:63,
            clr:"red"
        },
        {
            name:"snowflake",
            txt:"Settings"
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
                        <Icon name={item.name} color={item.color||"grey"} size={Dimensions.get("window").width>700?25:20} />
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
        height:Dimensions.get("window").height > 680 ? 70 : 70  
    },
    cont:{
        justifyContent:"center",
        alignItems:"center",
        
    }
});

//make this component available to the app
export default Footer;
