//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// create a component
const ScrollMenu = () => {
  const DataSet = [
    {
      n1: 'Wuhan',
      n2: 'china',
      icon: 'location',
      bckg: 'green',
    },
    {
      n1: 'Corona',
      n2: 'virus',
    },
    {
      n1: 'limbe',
      n2: 'kamer',
    },
    {
      n1: 'Mexico',
      n2: 'USA',
    },
    {
      n1: 'Joe',
      n2: 'biden',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.n1}
        data={DataSet}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'row', paddingHorizontal: 17}}>
              <Icon name={item.icon} color={item.bckg} size={19} />
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: item.bckg, fontSize: 18}}>{item.n1} </Text>
                <Text style={{color: item.bckg, fontSize: 18}}>{item.n2} </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default ScrollMenu;
