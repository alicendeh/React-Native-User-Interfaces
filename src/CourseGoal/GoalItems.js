import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const GoalItems = (props) => {
    return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete}>
        <View style={{backgroundColor:'#abc123',width:'70%',alignItems:'center',justifyContent:'center',margin:7,padding:7}}>
            <Text>{props.val} </Text>
        </View>
    </TouchableOpacity>
    )
}

export default GoalItems

const styles = StyleSheet.create({})
