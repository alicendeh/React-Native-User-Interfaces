//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const LastComp = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 9,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Snake Plant</Text>
        <Text style={{fontSize: 27, fontWeight: 'bold', color: 'green'}}>
          $20{' '}
          <View
            style={{
              backgroundColor: 'green',
              borderWidth: 1,
              borderColor: 'green',
              width: 10,
              height: 1,
              marginTop: -7,
              marginVertical: 5,
            }}></View>
        </Text>
      </View>
      <View style={{width: '95%', padding: 9}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          This site uses cookies. By using the website you agree to their
          recording or reading
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default LastComp;
