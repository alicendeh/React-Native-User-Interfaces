import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ReusableFruitSlide(props) {
    return (
        <View style={{...styles.cont1,...props.myStyle}} >
           <View style={{...styles.cont2,...props.style}}>
          {props.children}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont1:{
        width:56,
        height:56,
        borderRadius:65,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:9,
    },
    cont2:{
        width:49,
        height:49,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    }
})
