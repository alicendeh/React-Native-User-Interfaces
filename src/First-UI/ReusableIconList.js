import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReusableCard from './ReusableCard'
import Icon from 'react-native-vector-icons/FontAwesome';

const ReusableIconList = (props) => {
    return (
        <View >
            <ReusableCard style={{backgroundColor:'#fff'}}>      
           <Icon name={props.name} size={25} style={{...styles.clr,...props.color}} />
            </ReusableCard>
            <View>
            <Text style={{...styles.txt,...props.style}}>{props.title} </Text>
            </View>
        </View>
    )
}

export default ReusableIconList

const styles = StyleSheet.create({
    txt:{
        fontSize:15,
        paddingTop:7
    },
    clr:{
      color:  "#304f98"
     }
})
