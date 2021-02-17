//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
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
import PlantApp2 from './src/PlantApp2/PlantApp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlantBox from './src/PlantApp2/PlantBox';
import RNNavig from './src/RN-Navig/MainApp';
import MainRender from './src/MainRender';
import Login from './src/Plant/Auth/Comp1';

const Stack = createStackNavigator();

// // // create a component

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainRender} options={{}} />
        <Stack.Screen name="Beach" component={UIApp} />
        <Stack.Screen
          name="Art"
          component={Art}
          options={{title: 'Best of cinema'}}
        />
        <Stack.Screen name="Nature" component={PlantApp2} />
        <Stack.Screen name="Main" component={MainApp} />
        <Stack.Screen name="Ads" component={AppAds} />
        <Stack.Screen name="Todo" component={CourseGoalApp} />
        <Stack.Screen name="UI1" component={UI1} />
        <Stack.Screen name="WAPP" component={WApp} />
        <Stack.Screen name="plant" component={PlantApp} />
        <Stack.Screen name="store" component={AppStore} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet, StatusBar} from 'react-native';
// import Screen1App from './src/AnotherApp/Screen1/Screen1App';
// // create a component
// import Discover from './src/AnotherApp/Screen1/FooterScreens/Discover';
// const MyComponent = () => {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#667eac" />
//         <Screen1App />

//       </View>
//     </NavigationContainer>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// //make this component available to the app
// export default MyComponent;

//import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Detail from './src/Navigation/Detail';
// import Home from './src/Navigation/Home';
// import HoomeStack from './src/Navigation/HoomeStack';
// import DetailScreen from './src/Navigation/DeatilStack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import TabScreen from './src/Navigation/BottomTab';
// // create a component
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const App = () => {
//   return (
// <NavigationContainer>
//   <Drawer.Navigator initialRouteName=" Home">
//     <Drawer.Screen name="Home" component={TabScreen} />
//     <Drawer.Screen name="Detail" component={DetailScreen} />
//   </Drawer.Navigator>
// </NavigationContainer>
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         activeColor="yellow"
//         inactiveColor="white"

//         barStyle={{backgroundColor: 'black'}}>
//         <Tab.Screen
//           style={{
//             backgroundColor: '#2222ee',
//           }}

//           name="Home"
//           component={Home}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarColor: 'yellow',

//             tabBarIcon: ({color}) => (
//               <Icon name="bell" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Detail"
//           component={Detail}
//           options={{
//             tabBarLabel: 'Detail',

//             tabBarIcon: ({color}) => (
//               <Icon name="account" color={color} size={26} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {},
// });

// //make this component available to the app
// export default App;
