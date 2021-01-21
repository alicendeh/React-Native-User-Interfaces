import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={{
            borderWidth:1,flexDirection:'row',
            borderColor:'black',
            margin:18
        }}>
            <Icon name="plus" size={20} color="black"  />
            <TextInput placeholder='hey' style={{}} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
