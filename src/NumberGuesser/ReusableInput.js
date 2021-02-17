import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const ReusableInput = (props) => {
    return (
       <TextInput  {...props} style={{...styles.input,...props.style}}  />
    )
}

export default ReusableInput

const styles = StyleSheet.create({
    input:{
        height:40,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10,
        fontSize:18
    }
})
