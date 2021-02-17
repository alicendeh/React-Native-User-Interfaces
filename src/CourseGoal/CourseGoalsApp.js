import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StarterScreen from './StarterScreen'

const CourseGoalsApp = () => {
    return (
        <View style={styles.container}>
                <StarterScreen/>
        </View>
    )
}

export default CourseGoalsApp

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
