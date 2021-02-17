//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,FlatList,Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Entypo"
import Options from "../Options"
// create a component
const RChat = () => {
    const Data = [
        {
            img : require("../Assets/photo_4.jpeg"),
            name:"Franquie",
            msg:"Merci",
            time:"22,16",
            color:"blue",
            num:1,
            mic:"mic"
        },
        {
            img : require("../Assets/images.jpeg"),
            name:"Yaya Mamoudou",
            msg:"Tu fais quoi?",
            time:"22.10",
            num:3
            
        },
        {
            img : require("../Assets/photo_5.jpeg"),
            name:"Alex",
            msg:"Bonne Annee",
            time:"21.08",
            color:"blue",
            num:1
            
        },
        {
            img : require("../Assets/photo_3.jpeg"),
            name:"Fritz Christ",
            msg:"   Christain ca va?",
            time:"21.00",
            mic:"mic"
            
        },
        {
            img : require("../Assets/photo_5.jpeg"),
            name:"Mary",
            msg:"Combi rember the story",
            time:"19.30",
            color:"blue",
            num:5
        },
        {
            img : require("../Assets/photo_4.jpeg"),
            name:"Just Business",
            msg:"Merci",
            time:"22,16",
            color:"blue",
            num:50
        },
        {
            img : require("../Assets/images.jpeg"),
            name:"FET 2018/2019 Batch",
            msg:"Hey guys i have an idea",
            time:"22.10",
            num:15
            
        },
        {
            img : require("../Assets/photo_5.jpeg"),
            name:"Frank",
            msg:"Bonne Annee",
            time:"21.08",
            color:"blue",
            num:3
            
        },
        {
            img : require("../Assets/photo_3.jpeg"),
            name:"M.A.F.Y",
            msg:"   Christain ca va?",
            time:"21.00",
            
        },
        {
            img : require("../Assets/photo_5.jpeg"),
            name:"Olyvan",
            msg:"Combi hows Oscar",
            time:"19.30",
            color:"blue",
            num:1,
            mic:"mic"
        },
    ]
    
    return (
        <View style={{flex:1}} >
                <Options/>

            <FlatList
            keyExtractor={(item)=>item.name}
            data={Data}
            renderItem = {({item})=>{
                return (
        <View style={styles.container}>
            <View >
                <Image source={item.img} style={styles.imgCont}/>
            </View>
            <View style={styles.txtCont}>  
                <View>
                 <Text style={{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
                 <View style={{flexDirection:"row",padding:5}}>
                <View style={{flexDirection:"row"}}>
                <Icon name="check" size={Dimensions.get("window").width>600?20:15} color={item.color||"grey"} />
                 <Icon name="check" size={Dimensions.get("window").width>600?20:15} color={item.color||"grey"}/>
                 <Icon name={item.mic} size={Dimensions.get("window").width>600?20:15} color={item.color}/>

                </View>
                 <Text style={{width:"70%"}} >{item.msg}</Text>
                 </View>
                </View>
                <View>
                    <Text>{item.time}</Text>
                    <View style={{
                         backgroundColor:item.color,
                         borderRadius:Dimensions.get("window").width*0.7,
                         padding:5,
                         justifyContent:"center",
                         alignItems:"center",
                         width:Dimensions.get("window").width > 600 ? 50 :30
                    }}>
                        <Text style={{color:"white"}}>{item.num}</Text>
                    </View>
                </View>
            </View>
           </View>
                )
            }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding:10,
        width:"100%",
       
    },
    imgCont:{
        width:Dimensions.get("window").width*0.14 ,
        height:Dimensions.get("window").width*0.14 ,
        borderRadius:Dimensions.get("window").width*0.15/2
    },
    txtCont:{
        flex:1,
        borderBottomWidth:0.7,
        borderBottomColor:"grey",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:18
    },
    num:{
       
    }
});

//make this component available to the app
export default RChat;
