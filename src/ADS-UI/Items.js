import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import ReusableItem from './ReusableItems'

const AppAds = () => {
    const itemData = [
      { 
        img:require("./imgs/1.jpg"),
        name:'Apple Juice',
        price:'£8.75',
        iconName:'shopping-cart' ,
        bckg:"#e89195"

    },
    { 
        img:require("./imgs/2.jpg"),
        name:'Pinapple Juice',
        price:'£10.75',
        iconName:'shopping-cart' ,
        bckg:'#f0cde2'  
    },
    { 
        img:require("./imgs/3.jpg"),
        name:'Citrus Juice',
        price:'£5.75',
        iconName:'shopping-cart'  ,
        bckg:'yellow' 
    }

    ]
    return (
        <View style={styles.container} >
        <Text style={{fontSize:20,color:'white',margin:10}} >Most Popular</Text>
     <FlatList  
     
     keyExtractor={(item)=>item.price}
     horizontal
     data={itemData}
     renderItem = {({item})=>{
         return (
            <ReusableItem 
            style={{backgroundColor:item.bckg}}
            name ={item.name} price={item.price} icon={item.iconName} img={item.img} />
         )
     }}
     />
        </View>
    )
}

export default AppAds

const styles = StyleSheet.create({
    container:{

    }
})
