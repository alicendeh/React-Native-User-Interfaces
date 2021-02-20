import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const GoalInput = (props) => {
  const [data, setData] = useState('');

  const goalHandler = (txt) => {
    setData(txt);
  };
  return (
    <View style={{margin: 7, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        placeholder="Enter A Goal"
        style={{
          width: '70%',
          borderWidth: 2,
          borderColor: 'black',
          fontSize: 19,
        }}
        value={data}
        onChangeText={goalHandler}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          width: '55%',
        }}>
        <Button
          title="ADD"
          style={{backgroundColor: 'red'}}
          onPress={props.addedGoal.bind(this, data)}
        />
        <Button title="RESET" />
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({});
