//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RCard from './RCard';

// create a component
const Term = () => {
  const DataSet = [
    {
      IName: 'notifications',
      title: 'Notification',
      num: '10 news',
      clr: '#d7bc4e',
    },
    {
      IName: 'fast-food',
      title: 'Events',
      num: '5 Invites',
      clr: 'teal',
    },
    {
      IName: 'female-outline',
      title: 'Mamoudou',
      num: 'A Name',
      clr: '#ba7335',
    },
    {
      IName: 'file-tray',
      title: 'Yaya',
      num: 'Black',
      clr: 'orange',
    },
    {
      IName: 'flash',
      title: 'Talent',
      num: '1 Invite',
      clr: 'yellow',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tIName}
        data={DataSet}
        renderItem={({item}) => {
          return (
            <View>
              <RCard
                IName={item.IName}
                title={item.title}
                num={item.num}
                clr={item.clr}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 200,
  },
});

//make this component available to the app
export default Term;
