import React, {forwardRef, useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Color } from '../utils/Colors';

const NewCustomInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <View style={[styles.field, props.style, props.Hello]}>

      <Text style={styles.TextStyle}>{props.InputUText}</Text>

      <TextInput
        textContentType={props.textContentType}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={'#999B9E'}
        style={[styles.InputStyles, props.Gapp, props.restyle]}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        textAlignVertical={props.textAlignVertical}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={props.placeholderStyle}
        fontSize={15}
        maxLength={props.maxLength}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    height: scale(55),
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: Color.InputBackgroundTwo,
  },
  TextStyle: {
    fontFamily: 'open sans',
    fontSize:scale(15),
    fontStyle: 'normal',
    fontWeight: '600',
    zIndex: 10,
    marginLeft: scale(20),
  },
  field: {
    height: verticalScale(55),
    marginBottom: scale(10),
  },
});
export default NewCustomInput;
