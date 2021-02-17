import React from 'react'
import { StyleSheet, Text, View,FlatList ,ScrollViewBase} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ReusableItem from './ReusableListItem'

const ListItem = () => {
    const list = [
        {
            icon:'cart-plus',
            type:'Grocery',
            loc:'Eately Downtown',
            expense:'-£50.68',
            date:'Aug 26'
        },
        {
            icon:'car',
            type:'Transport',
            expense:'-6.00',
            date:'Aug 26',
            loc:'UBER Pool',
            top:2,
            radius:0
        },
        {
            icon:'credit-card',
            type:'Payment',
            expense:'+650.00',
            date:'Aug 25',
            loc:'Payment from Andre',
            padding:17,
            clr:'green'
        },
        {
            icon:'tripadvisor',
            type:'Sells',
            expense:'+800.00',
            date:'Aug 24',
            loc:'Sold to Hareese',
            clr:'orange',
            
        },
        {
            icon:'trash',
            type:'Dumped',
            expense:'-80.00',
            date:'Aug 24',
            loc:'Ejected some stuffs',
            top:2,
            radius:0,
            clr:'red'
        },
    ]
    return (
        <View style={{flex:1}}>
        <Text style={{fontSize:18,color:"#2e2d1e",paddingHorizontal:25,paddingVertical:15}}>TODAY</Text>
      <FlatList
      data={list}
      keyExtractor={(item)=>item.icon}
      renderItem = {({item})=>{
          return (
            <ReusableItem icon={item.icon} type={item.type} expense={item.expense} date={item.date} loc={item.loc}
            top={{
               borderTopWidth:item.top,
               width:"90%",
               borderTopRightRadius:item.radius,
               borderTopLeftRadius:item.radius,
               margin:item.padding  
           }}
           style={{
               color:item.clr
           }}
            />
          )
      }}
      />
      </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})
