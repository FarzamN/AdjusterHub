import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Color} from '../utils/Colors';
import {scale} from 'react-native-size-matters';

const DrawerContainer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#056DFE', '#056BF9', '#034EAC', '#024391']}
        style={styles.linearGradient}>
        <Image
          source={require('../assets/Images/drawerlogo.png')}
          style={styles.sideMenuProfileIcon}
        />
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            style={{backgroundColor: 'white'}}
            icon={() => <Entypo color={'#EF6464'} size={20} name={'log-out'} />}
            labelStyle={{color: '#1f1f1f', marginLeft: -15}}
            label="Log Out"
          />
        </DrawerContentScrollView>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            marginLeft: scale(10),
            color: 'white',
            textTransform: 'uppercase',
          }}>
          adjusterhub
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#9AB4D3',
            fontWeight: '600',
            textTransform: 'capitalize',
            marginBottom: scale(20),
            marginLeft: scale(10),
          }}>
          app version 1.0.0
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

    borderRadius: 5,
  },
  sideMenuProfileIcon: {
    // resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: scale(20),
    // borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerContainer;
