import React,{useState} from 'react'
import { StyleSheet, Text, View,Button,FlatList,TextInput } from 'react-native'
import GoalInput from './GoalInput'
import GoalItems from './GoalItems';

const StarterScreen = () => {
    const [addGoal,setAddGoal] = useState([]);

     const addedGoal = (data)=>{
      setAddGoal(prevGoal=>[...prevGoal,{id:Math.random().toString(),value:data}])
    }
    const onDelete = (itemID)=>{
        setAddGoal(prevGoal=>prevGoal.filter((goal)=>(goal.id !== itemID)) )
    }
    return (
       <View>
        <GoalInput addedGoal={addedGoal}/> 
        <FlatList
        keyExtractor={(item)=>item.id}
        data={addGoal}
        renderItem={({item})=>{
            return (
             <GoalItems val = {item.value} onDelete={onDelete.bind(this,item.id)} />
            )
        }}
        />
    </View>  
    )
}

export default StarterScreen

const styles = StyleSheet.create({})
