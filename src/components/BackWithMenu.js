import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { Color } from '../utils/Colors';

const BackWithMenu = props => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={props.onPress_back}
        activeOpacity={0.5}
        style={styles.arrow}>
        <FontAwesome
          style={styles.FontAwesomeArrow}
          name={'angle-left'}
          size={30}
          color={Color.White}
        />
      </TouchableOpacity>
      <View>
        <Image style={{
          width: scale(120),
          height: scale(60),
          resizeMode: 'contain'
        }} source={require('../assets/Images/minilogo.png')} />
      </View>
      <TouchableOpacity activeOpacity={1} onPress={props.onPress} style={styles.Menu}>
        <Feather name={'menu'} size={30} color={Color.Main} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    paddingHorizontal : scale(15),
    // paddingTop : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    backgroundColor: Color.Main,
    width: scale(32),
    height: scale(32),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FontAwesomeArrow: {
    marginRight: 3,
    marginTop: -2,
    // backgroundColor: 'red'
    alignSelf: 'center'
  },
});

export default BackWithMenu;
