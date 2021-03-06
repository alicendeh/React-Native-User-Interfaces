//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import RDisp2 from '../Dispplay2/RDisp2';
// create a component
const Display3 = () => {
  const CartoonData = [
    {
      name: 'Street Gang',
      sujest: 'Learn',
      img: require('../Assets/2.webp'),
    },
    {
      season: 'Ultimum dum',
      name: 'knoght',
      sujest: 'discover wintry side stories',
      img: require('../Assets/1c.jpeg'),
    },
    {
      name: 'Chess Titan',
      sujest: 'FOr the strong!',
      img: require('../Assets/1.jpg'),
    },
    {
      name: 'knoghthood',
      sujest: 'discover wintry side stories',
      img: require('../Assets/3.png'),
    },
    {
      name: 'Chess - Play & Learn',
      sujest: 'Games,Puzzles,,and Friends!',
      img: require('../Assets/1a.jpg'),
    },
    {
      name: 'Pokemon GO',
      sujest: 'Discover Pokemon worldwide',
      img: require('../Assets/1b.jpeg'),
    },
    {
      name: 'Didney land',
      sujest: 'Swin In disney land',
      img: require('../Assets/2.webp'),
    },
    {
      season: 'tTetrix',
      name: 'Discover new Tetrix',
      sujest: 'discover wintry side stories',
      img: require('../Assets/1c.jpeg'),
    },
    {
      name: 'King Gang',
      sujest: 'Games',
      img: require('../Assets/1.jpg'),
    },
  ];
  const WIDTH = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH}
        decelerationRate={'fast'}
        horizontal
        keyExtractor={(item) => item.name}
        data={CartoonData}
        renderItem={({item}) => {
          return (
            <View>
              <RDisp2 name={item.name} sujest={item.sujest} img={item.img} />
              <RDisp2 name={item.name} sujest={item.sujest} img={item.img} />
              <RDisp2 name={item.name} sujest={item.sujest} img={item.img} />
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
  },
});

//make this component available to the app
export default Display3;
