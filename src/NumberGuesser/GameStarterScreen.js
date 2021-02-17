import React,{useState} from 'react'
import { StyleSheet, Text, View,Button,TextInput,Keyboard,TouchableWithoutFeedback,Alert } from 'react-native'
import ReusableCard from './ReusableCard'
import Color from './Color'
import ReusableInput from './ReusableInput'
import ReusableNumberContainer from "./ReusableNumberContainer"

const GameStarterScreen = () => {
    const [numInput,setNumInput] = useState('');

    const [confirmedNum,setConfirmedNum] = useState(false);

    const confirmHandler = ()=>{
        const num = parseInt(numInput);
        if(num <= 0 || isNaN(num) || num > 99 ){
            Alert.alert('Invalid Number!','Number has to be between 1 and 99',
            [{text:'Okay',style:'destructive',onPress:resetHandler}])
            return
        }
        setNumInput('')
        setConfirmedNum(true)
        setNumInput(num)
        Keyboard.dismiss()
    }

    const myInput = (number) =>{
        setNumInput(number.replace(/[^0-9]/g,''))
    }
    const resetHandler = ()=>{
        setNumInput('')
        setConfirmedNum(false)
    }
    let output;
    if(confirmedNum){
        output = 
        <ReusableCard style={styles.confirmBox}>
            <View style={{padding:8}}>
              <Text style={{fontSize:19,fontWeight:'bold'}}>You selected</Text>
              <ReusableNumberContainer style={styles.numberBox} >{numInput} </ReusableNumberContainer>
            <Button title="START GAME" />
            </View>
        </ReusableCard>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} >
        <View style={styles.mainView}>
            <Text style={styles.txt} >Start A New Game!</Text>
            <ReusableCard style={styles.card}>
                <View style={styles.cont}>
                    <Text style={styles.txt2} >Select a Number</Text>
                    <ReusableInput style={styles.input} blurOnSubmit
                    autoCapitalize='none' autoCorrect={false} 
                    keyboardType="number-pad" maxLength={2}
                    value={numInput}
                    onChangeText={myInput}
                   
                    />
                </View>
                <View style={styles.btns}>
                   <View style={styles.indBtns}> 
                     <Button title="RESET" color={Color.sec} onPress={resetHandler} />
                   </View>
                   <View style={styles.indBtns}>
                     <Button title="CONFIRM" color={Color.prim} onPress={confirmHandler}  />
                   </View>       
                </View>  
            </ReusableCard>
            {output}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default GameStarterScreen

const styles = StyleSheet.create({
    mainView:{
        padding: 10,
        alignItems:'center',
        flex:1
    },
    txt:{
        fontSize:20
    },
    txt2:{
        fontSize:17
    },
    card:{
        padding: 25,
        alignItems:'center',
        width:'90%',
        height:170,
    },
    input:{
        
        textAlign:'center'
    },
    btns:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    cont:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    indBtns:{
        width:100
    },
    confirmBox:{
        width:'50%',
        height:180,
        alignItems:"center",
      marginTop:20,
      justifyContent:"center"
    },
  

})
