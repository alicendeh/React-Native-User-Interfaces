import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AppAds = (props) => {
    return (
        <View style={{...styles.container,...props.style}}>
            <View style={{...styles.img}}>
                <Image style={styles.container} source={props.img}
                style={{width:100,height:250,borderRadius:10}}
                />
            </View>
            <View style={{...styles.mainView}}>
                <View>
                    <Text style={styles.txt}>{props.name} </Text>
                    <Text style={styles.txt}>{props.price} </Text>
                </View>
                <View style={{...styles.img}} >
                <Icon  name={props.icon} size={30} color="white" />
                </View>
            </View>
        </View>
          
        
    )
}

export default AppAds

const styles = StyleSheet.create({
    container:{
        width:250,
        height:340,
        padding:15, 
        backgroundColor:'#e89195',
        borderRadius:20,
        margin:8
       
       
    },
   
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15
        
    },
    img:{
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{color:"white",fontSize:20}

})
