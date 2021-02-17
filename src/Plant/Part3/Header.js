//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// create a component
const Header = () => {
  return (
    <View style={{padding: 6, margin: 12}}>
      <View style={styles.container}>
        <View>
          <Text style={{color: 'green', fontSize: 21}}>Jast</Text>
          <View style={styles.tea}>
            <Text style={{color: 'green', fontSize: 21}}>Tea</Text>
            <View
              style={{
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'teal',
                width: 7,
                height: 7,
                borderRadius: 50,
                marginVertical: 16,
                marginHorizontal: 5,
              }}></View>
          </View>
        </View>
        <Icon name="dots-three-horizontal" size={20} color="green" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 27, fontWeight: 'bold'}}>Oolang tea</Text>
        <View
          style={{
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: 'teal',
            width: 7,
            height: 7,
            borderRadius: 50,
            marginVertical: 18,
            marginHorizontal: 5,
          }}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tea: {
    flexDirection: 'row',
  },
});

//make this component available to the app
export default Header;
