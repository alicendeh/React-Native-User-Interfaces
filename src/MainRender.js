//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinnearGradient from 'react-native-linear-gradient';
// create a component
const MyComponent = ({navigation}) => {
  const Data = [
    {
      name: 'Home',
      img: {uri: 'https://cutt.ly/PjBChVr'},
    },
    {
      name: 'Beach',
      img: {uri: 'https://cutt.ly/PjBChVr'},
    },
    {
      name: 'Art',
      img: {uri: 'https://cutt.ly/GjBCvVk'},
    },
    {
      name: 'Nature',
      img: {uri: 'https://cutt.ly/RjBCn7s'},
    },
    {
      name: 'Main',
      img: {uri: 'https://cutt.ly/MjBCPGE'},
    },
    {
      img: {uri: 'https://cutt.ly/FjBCHc2'},
      name: 'Ads',
    },
    {
      img: {uri: 'https://cutt.ly/0jBCL1i'},
      name: 'Todo',
    },
    {
      img: {uri: 'https://cutt.ly/kjBCVdk'},
      name: 'UI1',
    },
    {
      img: {uri: 'https://cutt.ly/ujBVwIR'},
      name: 'WAPP',
    },
    {
      img: {uri: 'https://cutt.ly/mjBVdQJ'},
      name: 'plant',
    },
    {
      img: {uri: 'https://cutt.ly/3jBVzAo'},
      name: 'store',
    },
    {
      img: {uri: 'https://cutt.ly/BjBVmzu'},
      name: 'Login',
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', margin: 25}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
            color: 'teal',
            fontFamily: 'Pacifico-Regular',
          }}>
          View Some UIs
        </Text>
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.container1}
          keyExtractor={(item) => item.name}
          data={Data}
          numColumns="2"
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate(item.name)}
                style={styles.cont}>
                <ImageBackground
                  source={item.img}
                  style={{
                    width: Dimensions.get('window').width * 0.4,
                    height: 90,
                  }}></ImageBackground>

                <LinnearGradient
                  colors={['pink', 'yellow']}
                  style={{
                    padding: 6,
                    margin: 6,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'black'}}>{item.name} </Text>
                </LinnearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'column',
    marginHorizontal: 8,
    marginRight: 7,
    // flexWrap: 'wrap',
  },
  cont: {
    height: 140,
    width: Dimensions.get('window').width * 0.5,
    backgroundColor: 'white',
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    paddingTop: 7,
  },
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;
