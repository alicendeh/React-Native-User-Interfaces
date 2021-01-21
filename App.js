//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UIApp from './src/BEACH-UI/UIApp';
import MainApp from './src/BEACH-UI/NEXTUI/MainApp';
import AppAds from './src/ADS-UI/AppAds';
import CourseGoalApp from './src/CourseGoal/CourseGoalsApp';
import NumberGusserApp from './src/NumberGuesser/NumberGusserApp';
import UI1 from './src/First-UI/FirstUIApp';
import WApp from './src/WhatsAppUI/WApp';
import AppStore from './src/AppStoreUI/AppStoreApp';
import Art from './src/Art/Art';
import PlantApp from './src/Plant/PlantApp';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <PlantApp />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
