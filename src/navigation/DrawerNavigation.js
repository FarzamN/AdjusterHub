import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/users/Profile';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserNavigation from './UserNavigation';
import DrawerContainer from './DrawerContainer';
import {Color} from '../utils/Colors';
import AuthNavigation from './AuthNavigation';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#1f1f1f',
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: '#1f1f1f',
        drawerInactiveBackgroundColor: 'white',
       
        drawerLabelStyle: {
          marginLeft: -20,
        },
        drawerStyle: {
          backgroundColor:'transparent',
        },
          drawerType: 'front'

      }}
      initialRouteName="Dashboard"
      drawerContent={props => <DrawerContainer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={UserNavigation}
        options={{
          title: 'Dashboard',
          drawerIcon: () => (
            <Ionicons name="md-home" size={20} color={Color.Main} />
          ),
        }}
      />
      <Drawer.Screen
        options={{
          title: '  Profile',
          drawerIcon: () => (
            <FontAwesome name="user" size={20} color={Color.Main} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Drawer.Navigator>
  );
};
