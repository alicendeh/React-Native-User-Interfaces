import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import FruitSlide from './FruitsSlide'
import Items from './Items'
import Footer from './Footer'

const AppAds = () => {
    return (
        <View style={styles.container} >
            <View style={{height:'12%'}}>
                <Header/>
            </View>
            <View style={{height:'15%'}}>
                <FruitSlide/>
            </View>
            <View style={{flex:1, marginHorizontal:10}}>
                 <Items/>
            </View>
            <View style={{height:'8%'}}>
                <Footer/>
            </View>
        </View>
    )
}

export default AppAds

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202840'
    }
})
