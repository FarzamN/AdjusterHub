import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicans from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { Color } from '../utils/Colors';

const BackAndLogo = props => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.5}
        style={styles.arrow}>
        {/* <FontAwesome style={styles.FontAwesomeArrow} name={'angle-left'} size={38} color={Color.White} /> */}
        <Ionicans style={styles.FontAwesomeArrow} name={'ios-chevron-back-outline'} size={35} color={Color.White} />
      </TouchableOpacity>
      <View>
        <Image style={{
          width: scale(120),
          height: scale(60),
          marginLeft : -5,
          resizeMode: 'contain'
        }} source={require('../assets/Images/minilogo.png')} />
      </View>
      <View style={styles.Menu}>
        <Feather name={'menu'} size={30} color={Color.White} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    // padding: scale(15),
    paddingHorizontal : scale(16),

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
    marginTop: 0,
    // backgroundColor: 'red'
    alignSelf: 'center'
  },
});

export default BackAndLogo;
