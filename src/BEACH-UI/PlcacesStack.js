//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import ReusablePlacesStack from './ReusablePlacesStack';
import ImageView from './ImageView';
import PlacesContainer from './PlacesContainer';

const Placestack = () => {
  const data = [
    {
      id: '1',
      city: 'Bali',
      country: 'Indonesia',
      imgLink: 'https://cutt.ly/OhMlfje',
    },
    {
      id: '2',
      city: 'Loire Valley',
      country: 'France',
      imgLink: 'https://cutt.ly/IhMlo3m',
    },
    {
      id: '3',
      city: 'Tiputini River',
      country: 'Ecuador',
      imgLink: 'https://cutt.ly/ghMlyS4',
    },
  ];
  return (
    <FlatList
      contentContainerStyle={styles.body}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({item}) => {
        return (
          <ReusablePlacesStack>
            <ImageView img={item.imgLink} />
            <PlacesContainer>
              <Text style={styles.placesText}>
                <Text style={styles.mainPlaceName}> {item.city} </Text>,
                {item.country}
              </Text>
            </PlacesContainer>
          </ReusablePlacesStack>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  placesText: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 10,
  },
  mainPlaceName: {
    fontWeight: 'bold',
  },
  body:{
    padding: 20
    // width: '100%'
  }
});

//make this component available to the app
export default Placestack;
