import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/authentication/Login';
import Register from '../screens/authentication/Register';
import OTP from '../screens/authentication/OTP';
import ChangePass from '../screens/authentication/ChangePass';
import {DrawerNavigation} from './DrawerNavigation';
import TermsAndCondition from '../screens/authentication/TermsAndCondition';
import VerifyEmail from '../screens/authentication/VerifyEmail';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
   
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="changePass" component={ChangePass} />
        <Stack.Screen name="verifyEmail" component={VerifyEmail} />
        <Stack.Screen name="termsandcondition" component={TermsAndCondition} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
  );
}

export default AuthNavigation;
