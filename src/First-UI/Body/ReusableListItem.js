import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ReusableCard from '../ReusableCard'

const ReusableListItem = (props) => {
    return (
        <View style={{alignItems:'center'}}>
    
        <View style={{...styles.container,...props.top}}>
        <ReusableCard style={{backgroundColor:'#ccc',height:50}} >
                <Icon name={props.icon} size= {25} color='#304f98'  />
        </ReusableCard>
        <View style={{...styles.mainView}}>
            <View >
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#304f98',fontSize:21}} >{props.type}</Text>
                <Text style={{...styles.txt,...props.style}}>{props.expense}</Text>
            </View>
        <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text  style={{color:'black',fontSize:15}}>{props.loc}</Text>
            <Text  style={{color:'black',fontSize:15}}>{props.date} </Text>
        </View>
        </View>
        </View>
      
    </View>
        </View>
    )
}

export default ReusableListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#ececec',
        width:'85%',
        borderRadius:14,
        padding:15
        
    },
    txt:{
        color:'#304f98',
        fontSize:21
    },
    mainView:{
        width:'90%',
        paddingHorizontal:8,
        borderTopColor:'black'
    }

})
