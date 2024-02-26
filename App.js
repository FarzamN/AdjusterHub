import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthNavigation from './src/navigation/AuthNavigation';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserNavigation from './src/navigation/UserNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { REGISTER } from './src/redux/reducer/reducer';
import { check_account, fetchTermsnConditions } from './src/redux/actions/Auth';
const App = () => {
  let userData = useSelector(state => state.userDetails)
  const [visible2, setVisible2] = useState(false)

  useEffect( ()=> {
    checkAsync();
    Dispatch(fetchTermsnConditions());
    setTimeout(()=>{
      console.log("hide ====>");
  SplashScreen.hide();
    },3000)
   },[])


  const Dispatch = useDispatch()
  const checkAsync = async () => {
    let userData = await AsyncStorage.getItem("userDetails");
    console.log("user Details ===>", JSON.parse(userData));
    Dispatch({type : REGISTER , payload : JSON.parse(userData)})
    let data = await JSON.parse(userData)
    if(data?.user_id){
      Dispatch(check_account(data?.user_id,setVisible2))
    }else{
      console.log('yo');
    }
  }
  
  return (
    <>
    <NavigationContainer>
    {userData  == null && <AuthNavigation />}
    {userData  != null && <DrawerNavigation />}
    </NavigationContainer>
    </>
  );
};
export default App;
