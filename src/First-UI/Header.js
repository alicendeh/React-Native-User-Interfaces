import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ReusableCard from './ReusableCard'
import IconDisplay from './IconDisplay'

export default function Header() {
    return (
        <View  style={{height:Dimensions.get("window").height>400?10:170,  backgroundColor:'#304f98', padding:15,width:'100%'}}>
           <View style={styles.container}>
             <View >
                <Text style={styles.txt} >£2,589.50</Text>
                <Text style={styles.balance}>Avialable Balance</Text>
             </View>
             <View style={{flexDirection:'row'}}>
                <Icon name="bell" size={25} color="white" />
                <View style={{paddingLeft:9}}>
               <ReusableCard style={{backgroundColor:'#fff'}}>
               <Image source={require('../BEACH-UI/Assets/photo_5.jpeg')} style={{width:35,height:35,borderRadius:10}} />
               </ReusableCard>
                </View>
             </View>
               
             </View>
                <View style={{marginTop:20}} >
                <IconDisplay/>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        flexDirection:'row',
        justifyContent:'space-between',
       
    },
    txt:{
        color:'white',
        fontSize:30
    },
    balance:{
        color:'#fff',
        fontSize:19
    }
})
