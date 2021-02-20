//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ModalContent from '../Modal/ModalContent';

// create a component

const About = () => {
  const data = [
    {
      id: '1',
      name: 'Alice',
      render: false,
    },
    {
      id: '2',
      name: 'Ndeh',
      render: false,
    },
    {
      id: '3',
      name: 'Signe',
      render: false,
    },
  ];
  const [Modal, setModal] = useState(data);

  const closeModal = (key) => {
    let modals = [...Modal];
    modals.map((item) => {
      item.id == key && (item.render = false);
    });
    setModal(modals);
  };
  const HandleModal = (key) => {
    let modals = [...Modal];
    modals.map((item) => {
      item.id == key && (item.render = true);
    });
    setModal(modals);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Modal}
        renderItem={({item}) => {
          return (
            <View style={{margin: 8}}>
              <Button title={item.name} onPress={() => HandleModal(item.id)} />
              <ModalContent
                MYopenModal={item.render}
                close={closeModal}
                modalData={item}
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

//make this component available to the app
export default About;
