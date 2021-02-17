import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import GameStarterScreen from './GameStarterScreen'

const NumberGusserApp = () => {
    return (
        <View style={styles.container} >
            <Header/>
            <GameStarterScreen/>
        </View>
    )
}

export default NumberGusserApp

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
