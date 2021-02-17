import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ReusableCard from './ReusableCard';
import ReusableIcon from './ReusableIconList'

const IconDisplay = () => {
    const IconData = [
        {
            name:'cloud-download',
            title:'Send'
        },
        {
            name:'bullseye',
            title:'Request'
        },
        {
            name:'android',
            title:'Loan'
        },
        {
            name:'google-wallet',
            title:'TopUp'
        },
    ]
    return (
        <FlatList 
        contentContainerStyle={{
            flexDirection:"row",
            justifyContent:"space-between"
        }}
        keyExtractor={(item)=>item.name}
        data={IconData}
        renderItem={({item})=>{
            return (
                <View style={{ 
                   
                }}>
                <ReusableIcon name={item.name} title={item.title} style={{color:'white'}} />
                </View>
               
            )
        }}
        />
        
        
    )
}

export default IconDisplay

const styles = StyleSheet.create({})
