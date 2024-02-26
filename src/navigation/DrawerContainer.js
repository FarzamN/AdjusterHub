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
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../redux/reducer/reducer';
import { LogOut } from '../redux/actions/Auth';

const DrawerContainer = props => {
  const navigation = useNavigation();
const Dispatch = useDispatch()
  return (

      <LinearGradient
        colors={['#066dfe', '#0d6cfe', '#034EAC', '#024391']}
        style={styles.linearGradient}>
        <Image
          source={require('../assets/Images/drawerlogo2.png')}
          style={styles.sideMenuProfileIcon}
        />
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            style={{backgroundColor: 'white',
            // width:'99%',marginLeft:0,borderRadius:0
          }}
            icon={() => <Entypo color={'#EF6464'} size={20} name={'log-out'} />}
            labelStyle={{color: '#1f1f1f', marginLeft: -16}}
            label="Log Out"
            onPress={() => Dispatch(LogOut())}
          />
        </DrawerContentScrollView>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            marginLeft: scale(13),
            color: 'white',
            textTransform: 'uppercase',
            fontFamily: 'Helvetica',
          }}>
          adjusterhub
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#9AB4D3',
            fontWeight: '600',
            textTransform: 'capitalize',
            marginBottom: scale(30),
            marginLeft: scale(15),
            fontFamily: 'Helvetica',
          }}>
          app version 1.0.0
        </Text>
      </LinearGradient>

  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 10,
    width:'95%'
  },
  sideMenuProfileIcon: {
    width: "100%",
    height: "10%",
    marginTop: scale(40),
    alignSelf: 'center',
    resizeMode : 'contain'
    ,padding : scale(80),
  //  paddingBottom : 0
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
