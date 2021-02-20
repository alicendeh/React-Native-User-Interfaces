//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// create a component
const ModalContent = (props) => {
  //   console.log(props.modalData);
  return (
    <View style={styles.container}>
      <Modal visible={props.MYopenModal} animationType={'slide'}>
        <Text>ModalContent</Text>
        <Text>i am the model content you clicked on just now</Text>
        <Button
          title="go back"
          onPress={() => props.close(props.modalData.id)}
        />
        <Text> {props.modalData.name} </Text>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
});

//make this component available to the app
export default ModalContent;
