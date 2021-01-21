import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import ReusableFruitSlide from './ReusableFruitSlide'
import Icon from 'react-native-vector-icons/FontAwesome'
const FruitsSlide = () => {
    const dataElement  = [
        {
            name:'camera',
            title:'Citron',
            color:'black',
            bckg2:'green',
            bckg:'white'
        },
        {
            name:'anchor',
            title:'Taboto',
            color:'yellow',
            
            bckg2:'orange',
            bckg:'pink'
        },
        {
            name:'apple',
            title:'Apple',
            color:'indigo',
            
            bckg2:'white',
            bckg:'purple'
        },
        {
            name:'book',
            title:'Avocado',
            color:'blue',
    
            
           
        },
        {
            name:'archive',
            title:'Grapes',
            color:'brown',
            bckg2:'green',
            bckg:'orange'
        },
        {
            name:'apple',
            title:'Mango',
            color:'orange',
        
        },
        {
            name:'apple',
            title:'Pineapple',
            color:'red',
        
        },
        {
            name:'apple',
            title:'Lemon',
            color:'brown',
        
        },
        {
            name:'apple',
            title:'PawPaw',
            color:'yellow',
        },
        {
            name:'apple',
            title:'Lime',
            color:'green',
        },
    ]
    return (
     <FlatList
   contentContainerStyle={{}}
      horizontal
     keyExtractor ={(item)=>item.title}
     data={dataElement}
     renderItem={({item})=>{
     return   (
        <View>
            <ReusableFruitSlide style={{backgroundColor:item.bckg,borderWidth:1}} myStyle={{backgroundColor:item.bckg2,borderWidth:1}} >
            <View>
                <Icon  name={item.name} size={25} color={item.color} />
            </View>
        </ReusableFruitSlide>
        <View style={{alignItems:'center',textAlign:'center',margin:8}}>
            <Text style={{color:'white',fontSize:18}} >
            {item.title}
            </Text>
        </View>
     
    </View> )
     }}
     />
    )
}

export default FruitsSlide

const styles = StyleSheet.create({})
