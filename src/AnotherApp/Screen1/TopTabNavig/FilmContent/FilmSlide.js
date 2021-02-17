//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
// create a component
const FilmeSlide = () => {
  const data = [
    {
      img: {uri: 'https://cutt.ly/QknBJF7'},
      name: 'Game Of Thrones',
      title: 'Action',
    },
    {
      img: {uri: 'https://cutt.ly/vknBCqD'},
      name: 'The Witcher',
      title: 'Battle',
    },
    {
      img: {uri: 'https://cutt.ly/9knB7JM'},
      name: 'Jumanji',
      title: 'fun',
    },
    {
      img: {uri: 'https://cutt.ly/nknNsLA'},
      name: 'Empire',
      title: 'music',
    },
  ];
  return (
    <FlatList
      keyExtractor={(item) => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate={'fast'}
      data={data}
      renderItem={({item}) => {
        return (
          <View style={{padding: 7}}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{width: WIDTH * 0.28, height: WIDTH * 0.3}}>
                <Image
                  source={item.img}
                  style={{width: '100%', height: '100%', borderRadius: 8}}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                paddingVertical: 7,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: 'white',

                fontSize: 13,
                paddingLeft: 8,
                marginTop: -6,
              }}>
              {item.title}
            </Text>
          </View>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 80,
  },
});

//make this component available to the app
export default FilmeSlide;
