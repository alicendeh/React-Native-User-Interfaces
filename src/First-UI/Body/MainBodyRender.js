import React from 'react'
import { StyleSheet, Text, View,ScrollView, ScrollViewBase } from 'react-native'
import Transaction from './Transactions'
import ListItem from './ListItem'

const MainBodyRender = () => {
    return (
        <ScrollView>
        <View style={{
         
        flex:1,
        width:"100%",
       
    }}>
            <Transaction/>
            <ListItem/>
        </View></ScrollView>
    )
}

export default MainBodyRender

const styles = StyleSheet.create({})
