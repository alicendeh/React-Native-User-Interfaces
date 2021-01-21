import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Transactions = () => {
    const display = [
        {
            title:'All',
            color:'#274894'

        },
        {
            title:'Income',
            name:'snapchat',
            bckg:'green'
        },
        {
            title:'Expense',
            name:'telegram',
            bckg:'orange'
        },
    ]
    return (
       
               <View style={{padding:17}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',}}>
                        <Text style={{color:'#274894',fontSize:24}} >Recent  Transactions </Text>
                        <Text style={{color:'#274894',fontSize:18}}>See All</Text>
                    </View>
                    <FlatList 
                    
                    contentContainerStyle={{flexDirection:"row",justifyContent:"space-between"
                }}
                    keyExtractor = {(item)=>item.name}
                    data={display}
                    renderItem ={({item})=>{
                        return (
                        <View style={{width:99,height:30,borderRadius:15,backgroundColor:'#ccc',
                    margin:10,alignItems:'center',justifyContent:'center'
                    }}>   
                            <Text style={{alignItems:'center',justifyContent:'center',fontSize:18,color:item.color}} > 
                            <Icon name={item.name} size={20} color={item.bckg}  />
                            {item.title}</Text>
                        </View>
                    )
                }}
                />
           </View>
        
      
    )
}

export default Transactions

const styles = StyleSheet.create({})
