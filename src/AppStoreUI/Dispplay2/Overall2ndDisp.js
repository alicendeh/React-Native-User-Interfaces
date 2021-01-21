//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,FlatList} from 'react-native';
import Disp2Stack from "./Disp2Stack"
// create a component
const Overall2ndDisp = () => {
    return (
        <View style={styles.container}>
            <Disp2Stack/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    
    },
});

//make this component available to the app
export default Overall2ndDisp;
