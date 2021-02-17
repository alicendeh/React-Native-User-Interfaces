import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from './Color'

const Header = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.headerTxt}>Guess a Number</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:Color.prim,
        height:90,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
       
    },
    headerTxt:{
        fontSize:19
    }
})
