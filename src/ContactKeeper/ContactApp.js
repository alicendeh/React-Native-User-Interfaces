import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'

const ContactApp = () => {
    return (
        <View  style={styles.container}>
           <Header/>
        </View>
    )
}

export default ContactApp

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
