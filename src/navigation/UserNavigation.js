import React from 'react';
import {} from 'react-native';
import Dashboard from '../screens/users/Dashboard';
import Reviewer from '../screens/users/Reviewer';
import User from '../screens/users/User';
import AddAdjusters from '../screens/users/AddAdjuster';
import Profile from '../screens/users/Profile';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Bubbles from '../screens/users/Bubbles';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
  
    <Stack.Navigator
      initialRouteName="dashboard1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="dashboard1" component={Dashboard} />
      <Stack.Screen name="user" component={User} />
      <Stack.Screen name="reviewer" component={Reviewer} />
      <Stack.Screen name="addadjusters" component={AddAdjusters} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="bubbles" component={Bubbles} />
    </Stack.Navigator>

   
  );
};

export default UserNavigation;
