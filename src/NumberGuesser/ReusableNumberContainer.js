import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from './Color'

const ReusableNumberContainer = (props) => {
    return (
        <View style={{alignItems:'center',justifyContent:'center',width:100}}>
        <View style={styles.numberBox}>
        <Text style={styles.txt}> {props.children} </Text>
    </View>
        </View>
    )
}

export default ReusableNumberContainer

const styles = StyleSheet.create({
    numberBox:{
        borderWidth:2,
        borderColor:Color.sec,
        borderRadius:10,
        alignItems:"center",
        justifyContent:'center',
        marginVertical:10,
        width:50,
        padding:6

    },
    txt:{
        color:Color.sec,
        fontSize:22
    }
})
