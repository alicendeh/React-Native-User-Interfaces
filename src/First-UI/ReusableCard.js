import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReusableCard = (props) => {
    return (
        <View style={{...styles.container,...props.style}}>
            {props.children}
        </View>
    )
}

export default ReusableCard

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:10
    }
})
