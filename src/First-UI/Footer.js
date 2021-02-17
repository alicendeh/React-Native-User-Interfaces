import React from 'react'
import { StyleSheet, Text, View,FlatList,Dimensions } from 'react-native'
import ReusableCard from './ReusableCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    const IconData = [
        {
            name:'forumbee',
            title:'Home',
            crdc:'#304f98',
            
        },
        {
            name:'skyatlas',
            title:'History',
            crdc:'#304f98',
            
        },
        {
            name:'plus',
            crdc:'white',
            color:'#304f98',
            height:70,
            width:70
        },
        {
            name:'optin-monster',
            title:'Cards',
            crdc:'#304f98',
            
        },
        {
            name:'tripadvisor',
            title:'Profile',
            crdc:'#304f98',
            
        },
    ]
    return (
      <View style={{height:Dimensions.get("window").height>450?70:70}}>
      <FlatList 
      keyExtractor={(item)=>item.name}
      data={IconData}
      contentContainerStyle={{
          flexDirection:"row",
          justifyContent:"space-between"
      }}
      renderItem={({item})=>{
          return (
              <View  style={{  marginRight:37}}>
                
              <ReusableCard style={{backgroundColor:item.color}}>      
              <Icon name={item.name} size={Dimensions.get("window").height>450?25:18} color={item.crdc} />
               </ReusableCard>
               <View>
               <Text style={styles.txt}>{item.title} </Text>
               </View>
            
             
              </View>
          )
      }}
      />
      </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    txt:{
        fontSize:15,paddingTop:7
    }
})
