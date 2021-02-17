//import liraries
import React, {Component} from 'react';
import InnerImg from './InnerImg';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// create a component
const MyComponent = () => {
  const DataSet = [
    {
      img: {
        uri: 'https://cutt.ly/9jJ6Zvs',
        txt1: '  生活是美好的',
        txt2: 'Wuyi Big Red',
        txt3: 'Robe Tea',
        ml: '2.5ml/500l',
      },
    },
    {
      uri: 'https://cutt.ly/9jJ6Zvs',
      txt1: '  明智地年龄',
      txt2: 'Wuyi Big Red',
      txt3: 'Robe Tea',
      ml: '2.5ml/500l',
    },
    {
      uri: 'https://cutt.ly/9jJ6Zvs',
      txt1: '  经常很难',
      txt2: 'Wuyi Big Red',
      txt3: 'Robe Tea',
      ml: '2.5ml/500l',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        keyExtractor={(item) => item.txt1}
        data={DataSet}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: '#52877e',
                width: Dimensions.get('window').width * 0.6,
                height: '75%',
                padding: 8,
                borderRadius: 120,
                marginRight: 27,
                marginTop: 20,
              }}>
              <InnerImg />
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
    marginLeft: 15,
    paddingLeft: 15,
  },
});

//make this component available to the app
export default MyComponent;
