import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Validation from '../../components/Validation';
import CustomInput from '../../components/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';

const Register = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} styles={{flex: 1}}>
        <View styles={{height: '100%'}}>
          <View style={styles.BlueBox}>
            <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
              Register
            </Text>
            <Text style={styles.TextTwo}>Welcome!</Text>
          </View>
          <View style={styles.GreyBox}></View>

          <View style={styles.MainContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={[styles.container, {backgroundColor: Color.White}]}>
              <View
                style={{
                  height: verticalScale(152),
                  width: scale(200),
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    height: verticalScale(150),
                    width: scale(200),
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={require('../../assets/Images/logo.png')}
                    style={styles.logo}
                  />
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <CustomInput
                  name="First Name"
                  rules={{
                    required: 'First Name is required',
                  }}
                  control={control}
                  style={[styles.textInput, {width: '49%'}]}
                  textStyle={styles.InputTextStyle}
                  placeholder={'First Name'}
                  keyboardType={'default'}
                  restyle={{
                    backgroundColor: Color.InputBackground,
                    color: '#000',
                    paddingHorizontal: moderateScale(10),
                  }}
                />
                <CustomInput
                  name="Last Name"
                  rules={{
                    required: 'Last Name is required',
                  }}
                  control={control}
                  style={[styles.textInput, {width: '49%'}]}
                  textStyle={styles.InputTextStyle}
                  placeholder={'Last Name'}
                  keyboardType={'default'}
                  restyle={{
                    backgroundColor: Color.InputBackground,
                    color: '#000',
                    paddingHorizontal: moderateScale(10),
                  }}
                />
              </View>

              <CustomInput
                name="Email"
                rules={{
                  required: 'Email is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Email@gmail.com'}
                keyboardType={'default'}
                restyle={{
                  paddingHorizontal: moderateScale(40),
                  backgroundColor: '#F4F5F5',
                  color: '#000',
                }}
                PIname={'email'}
                PIsize={20}
                PIcolor={'#999B9E'}
                PIstylye={{
                  position: 'absolute',
                  bottom: scale(19),
                  left: scale(12),
                }}
              />
              {errors.email && <Validation title={errors.email.message} />}
              <View>
                <CustomInput
                  secureTextEntry={isPasswordSecure}
                  textContentType={'password'}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  name="Password"
                  rules={{
                    required: 'Password is required',
                  }}
                  control={control}
                  style={styles.textInput}
                  textStyle={styles.InputTextStyle}
                  placeholder={'Password'}
                  keyboardType={'default'}
                  restyle={{
                    backgroundColor: '#F4F5F5',
                    color: '#000',
                  }}
                  PIname2={'locked'}
                  PIsize2={18}
                  PIcolor2={'#999B9E'}
                  PIstylye2={{
                    position: 'absolute',
                    bottom: scale(35),
                    left: scale(12),
                  }}
                  onPress={() => {
                    isPasswordSecure
                      ? setIsPasswordSecure(false)
                      : setIsPasswordSecure(true);
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: scale(15),
                    bottom: scale(5),
                  }}
                  onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                  <Text style={styles.viewText}>
                    {isPasswordSecure ? 'SHOW' : 'HIDE'}
                  </Text>
                </TouchableOpacity>
              </View>
              <CustomButton
                onPress={() => navigation.navigate('otp')}
                title={'register'}
                textStyle={{fontSize: scale(30)}}
                containerStyle={{
                  marginTop: scale(40),
                  height: verticalScale(50),
                }}
              />
              <View style={styles.FPassCon}>
                <Text
                  style={{
                    fontSize: scale(13),
                    color: '#000',
                    fontFamily: 'MyriadPro-Regular',
                  }}>
                  By taping "Register" you accept our
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('termsandcondition')}>
                  <Text
                    style={{
                      fontSize: scale(13),
                      color: '#0568F2',
                      fontStyle: 'normal',
                      marginLeft: scale(5),
                      alignSelf: 'flex-end',
                      fontFamily: 'MyriadPro-Regular',
                    }}>
                    Terms of Service.
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(50),
    marginVertical: scale(10),
  },
  container: {
    flex: 1,
    backgroundColor: '#DDDEDF',
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(25),
    marginTop: scale(30),
    textTransform: 'uppercase',
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    marginTop: scale(-5),
    fontFamily: 'MyriadPro-Regular',
  },
  BlueBox: {
    backgroundColor: '#0568F2',
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: '#DDDEDF',
    height: verticalScale(480),
  },
  MainContainer: {
    elevation: 5,
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '17%',
    paddingHorizontal: 20,
    paddingTop: scale(25),
    paddingBottom: moderateScale(30),
    borderRadius: 20,
    height: scale(540),
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  Add: {
    backgroundColor: '#545456',
    width: '85%',
    height: verticalScale(45),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: scale(20),
  },

  viewText: {
    color: '#0568F2',
    fontSize: scale(15),
    fontFamily: 'MyriadPro-Regular',
  },
  FPassCon: {
    marginTop: scale(5),
    alignSelf: 'flex-end',
  },
});
export default Register;
