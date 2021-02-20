//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  StatusBar,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ModalComponent from '../../Modal';
const WIDTH = Dimensions.get('screen').width;
// create a component
const FilmeSlide = () => {
  const data = [
    {
      img: {uri: 'https://cutt.ly/QknBJF7'},
      name: 'Game Of Thrones',
      render: 'true',
      title: 'Action',
      id: '1',
    },
    {
      img: {uri: 'https://cutt.ly/vknBCqD'},
      name: 'The Witcher',
      render: 'false',
      id: '2',
      title: 'Battle',
    },

    {
      img: {uri: 'https://cutt.ly/nknNsLA'},
      name: 'Empire',
      render: 'false',
      id: '3',
      title: 'music',
    },
    {
      img: {uri: 'https://cutt.ly/9knB7JM'},
      name: 'Jumanji',
      render: 'false',
      id: '4',
      title: 'fun',
    },
  ];
  const [Modal, setModal] = useState(data);

  const HandleModal = (key) => {
    let modals = [...Modal];
    modals.map((item) => {
      item.id == key && (item.render = true);
    });
    setModal(modals);
  };
  const closeModal = (key) => {
    let modals = [...Modal];
    modals.map((item) => {
      item.id == key && (item.render = false);
    });
    setModal(modals);
  };

  return (
    <FlatList
      keyExtractor={(item) => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate={'fast'}
      data={Modal}
      renderItem={({item}) => {
        return (
          <View style={{padding: 7}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => HandleModal(item.id)}>
              <View style={{width: WIDTH * 0.28, height: WIDTH * 0.3}}>
                <Image
                  source={item.img}
                  style={{width: '100%', height: '100%', borderRadius: 8}}
                />
              </View>
            </TouchableOpacity>
            <ModalComponent
              MYopenModal={item.render}
              modalData={item}
              close={closeModal}
            />
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
