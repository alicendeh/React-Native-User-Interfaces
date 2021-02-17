import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ReusableFruitSlide from './ReusableFruitSlide'

const Footer = () => {
    const IconData = [
        {
            name:'cogs',
            color:'#e89195',
           
            
           
        },
        {
            name:'shopping-cart',
            color:'white',

        },
        {
            name:'plus',
            color:'white',
            bckg:'#e89195'

        },
        {
            name:'bar-chart',
            color:'white',
            
           
        },
        {
            name:'user',
            color:'white',
          
        },

    ]
    return (
  
        <FlatList
           horizontal
          keyExtractor ={(item)=>item.name}
          data={IconData}
          renderItem={({item})=>{
          return   (
   
                 <View style={{}}>
                 <ReusableFruitSlide style={{backgroundColor:item.bckg}} >
                     <Icon  name={item.name} size={30} color={item.color} />
                </ReusableFruitSlide>
                 </View> 
        )
          }}
          />
 
    )
}

export default Footer

const styles = StyleSheet.create({})