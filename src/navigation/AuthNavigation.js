import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../screens/authentication/Login';
import Register from '../screens/authentication/Register';
import ChangePass from '../screens/authentication/ChangePass'
import OTP from '../screens/authentication/OTP'


const Stack = createNativeStackNavigator();

function AuthNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="changePass" component={ChangePass} />
                <Stack.Screen name="otp" component={OTP} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigation;