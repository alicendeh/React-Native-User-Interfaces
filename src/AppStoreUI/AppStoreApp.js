//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import Header from "./Header"
import DisplayOne from "./Display1/Display1"
import DisplayTwo from "./Dispplay2/MainDisplaay2"
import Footer from "./Footer"
import Disp3 from "./Display3/Disp3"
// create a component
const AppS = () => {
    return (
        <View style={styles.container}>
            <Header/> 
            <ScrollView>
                <DisplayOne/>
                <DisplayTwo/>
                <Disp3/>
                <DisplayTwo/>     
                <Disp3/>      
            </ScrollView>
            <Footer/>
       </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:10,
        margin:7
        
    },
});

//make this component available to the app
export default AppS;
