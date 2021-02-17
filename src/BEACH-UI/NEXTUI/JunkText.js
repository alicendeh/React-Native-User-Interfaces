//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Footer from './Footer';
// create a component
const JunkText = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>
          Bootstrap is a free CSS framework. Bootstrap 3 is the most stable
          version of Bootstrap, and it is still supported by the team for
          critical bugfixes and documentation changes. Bootstrap is a free CSS
          framework. Bootstrap 3 is the most stable version of Bootstrap, and it
          is still supported by the team for critical bugfixes and documentation
          changes. Bootstrap is a free CSS framework. Bootstrap 3 is the most
          stable version of Bootstrap, and it is still supported by the team for
          critical bugfixes and documentation changes. Bootstrap is a free CSS
          framework. Bootstrap 3 is the most stable version of Bootstrap, and it
          is still supported by the team for critical bugfixes and documentation
          changes.
        </Text>
      </ScrollView>
      <Footer />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 2.5,
  },
  txt: {
    color: '#808080',
    padding: 25,
  },
});

//make this component available to the app
export default JunkText;
