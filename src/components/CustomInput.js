import React, {forwardRef, useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {
  StyleSheet,
  InputField,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';

const CustomInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  // const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
        fontSize={17}
        maxLength={props.maxLength}
        
      />
      <View>
        <Zocial
          style={props.PIstylye}
          name={props.PIname}
          size={props.PIsize}
          color={props.PIcolor}
        />
      </View>

      <View>
        <Fontisto
          style={props.PIstylye2}
          name={props.PIname2}
          size={props.PIsize2}
          color={props.PIcolor2}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    height: scale(57),
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: scale(40),
    fontSize: scale(20),
    fontFamily: 'Helvetica',
  },
});
export default CustomInput;
