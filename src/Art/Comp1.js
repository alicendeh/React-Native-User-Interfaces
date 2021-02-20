//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinnearGradient from 'react-native-linear-gradient';

const {width, height} = new Dimensions.get('screen');
// create a component
const Comp1 = () => {
  //   console.log(`width = ${width} and height = ${height}`);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./Asset/1.jpg')}
        style={styles.img}
        resizeMode="stretch">
        <View style={styles.disp1}>
          <Icon name="arrow-left" color="white" size={20} />
          <Icon name="arrow-right" color="white" size={20} />
        </View>
        <View style={styles.disp2}>
          <View>
            <Text style={styles.txt}>Hettie </Text>
            <Text style={styles.txt}>Adams</Text>
          </View>
          <View style={styles.disp3}>
            <Text style={styles.txt1}>New York,NY</Text>
            <LinnearGradient colors={['pink', 'red']} style={styles.btn}>
              <Icon name="plus" color="white" size={15} />
            </LinnearGradient>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height > 450 ? '60%' : '100%',
  },
  img: {
    width: '100%',

    height: Dimensions.get('window').height > 450 ? '100%' : '100%',
  },
  disp1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
  disp2: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 8,
  },
  txt: {
    fontSize: 30,
    color: 'white',
  },
  disp3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  txt1: {
    color: 'white',
    fontSize: 14,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Comp1;
