//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RDisp from './RComp3';
// create a component
const Comp3 = () => {
  const DataSet = [
    {
      img: {uri: 'https://cutt.ly/ujHzAFM'},
      title: 'Moonlight',
    },

    {
      img: {uri: 'https://cutt.ly/gjHz5tp'},
      title: 'La la land',
    },
    {
      img: {uri: 'https://cutt.ly/XjHzCTg'},
      title: 'Dora',
    },
    {
      img: {uri: 'https://cutt.ly/wjHxiPL'},
      title: 'It',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        data={DataSet}
        renderItem={({item}) => {
          return <RDisp img={item.img} title={item.title} />;
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

//make this component available to the app
export default Comp3;
