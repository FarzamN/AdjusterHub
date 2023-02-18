import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthNavigation from './src/navigation/AuthNavigation';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return <AuthNavigation />;
};
export default App;
