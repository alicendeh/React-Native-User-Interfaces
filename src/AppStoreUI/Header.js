//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize:35,fontWeight:"bold"}} >Games</Text>
            </View>
            <View>
                <Icon name="user-circle-o" color="blue" size={29} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:"98%",
        flexDirection:"row",
        justifyContent: 'space-between',
        borderBottomWidth:0.4,
        borderBottomColor:"grey",
      
      
    },
});

//make this component available to the app
export default Header;
