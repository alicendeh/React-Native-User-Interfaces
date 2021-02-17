//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import RDisp from './RDisp1';

// create a component
const Display1 = () => {
  const WIDTH = Dimensions.get('window').width;
  const CartoonData = [
    {
      season: 'play the new season',
      name: 'clash royale',
      sujest: 'give your towers a new look',
      img: require('../Assets/1.jpg'),
    },
    {
      season: 'play the new season',
      name: 'homescapes',
      sujest: 'time to get sporty',
      img: require('../Assets/2.webp'),
    },
    {
      season: 'limited time',
      name: 'knoghthood',
      sujest: 'discover wintry side stories',
      img: require('../Assets/3.png'),
    },
    {
      season: 'fearured',
      name: 'our top 10 golf games',
      sujest: 'perfect your swing and putt',
      img: require('../Assets/4.jpg'),
    },
    {
      season: 'featured',
      name: 'our topp 10 metro games',
      sujest: 'blast from the past',
      img: require('../Assets/5.jpg'),
    },
    {
      season: 'new update',
      name: 'Vikings II',
      sujest: 'play the new infinit mode',
      img: require('../Assets/6.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        snapToInterval={WIDTH + 10}
        decelerationRate={'fast'}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 7,
        }}
        keyExtractor={(item) => item.name}
        data={CartoonData}
        renderItem={({item}) => {
          return (
            <View>
              <RDisp
                cartonSeason={item.season}
                cartonName={item.name}
                cartonSujest={item.sujest}
                img={item.img}
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
    flex: 1,
    marginTop: 20,
  },
});

//make this component available to the app
export default Display1;
