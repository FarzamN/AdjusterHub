import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';

const CustomButtton = props => {
  return props.withToggle ? (
    <View>
      <TouchableOpacity
        activeOpacity={props.activeOpacity}
        onPress={props.onPress}
        style={[
          styles.containerStyle,
          props.containerStyle,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}
      style={[styles.containerStyle, props.containerStyle]}>
      <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtton;

const styles = StyleSheet.create({
  containerStyle: {
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0568F2',
    marginHorizontal: scale(20),
    marginTop: scale(10),
    borderRadius: 10,
  },

  font: {
    color: '#fff',
    fontSize: scale(20),
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
});
