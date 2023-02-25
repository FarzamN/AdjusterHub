import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthNavigation from './src/navigation/AuthNavigation';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 5000);
  return <AuthNavigation />;
};
export default App;
