import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';

const Login = ({navigation}) => {
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
      <ScrollView style={{flex: 1}}>
        <View style={styles.BlueBox}>
          <Text style={[styles.TextOne, {fontFamily: 'gazrg-bold'}]}>
            WELCOME BACK
          </Text>
          <Text style={styles.TextTwo}>It's good to see you again!</Text>
        </View>
        <View style={styles.GreyBox}></View>
        <View style={styles.MainContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, {backgroundColor: Color.White}]}>
            <Image
              source={require('../../assets/Images/logo.png')}
              style={styles.logo}
            />
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
                marginTop: scale(15),
                backgroundColor: '#F4F5F5',
                color: '#000',
              }}
              PIname={'email'}
              PIsize={20}
              PIcolor={'#999B9E'}
              PIstylye={{
                position: 'absolute',
                bottom: scale(17),
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
                  top: scale(50),
                }}
                onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                <Text style={styles.viewText}>
                  {isPasswordSecure ? 'SHOW' : 'HIDE'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.FPassCon, {marginTop: scale(15)}]}>
              <Text
                style={{
                  fontSize: scale(14),
                  fontWeight: '500',
                  color: '#000',
                  fontStyle: 'normal',
                }}>
                Forgot Password?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('changePass')}>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '500',
                    color: '#0568F2',
                    fontStyle: 'normal',
                    marginLeft: scale(5),
                  }}>
                  Reset Here.
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              onPress={() => navigation.navigate('DrawerNavigation')}
              title={'login'}
              textStyle={{
                fontSize: scale(30),
              }}
              containerStyle={{
                marginTop: scale(40),
                height: verticalScale(50),
              }}
            />
            <View style={styles.FPassCon}>
              <Text
                style={{
                  fontSize: scale(14),
                  fontWeight: '500',
                  color: '#000',
                  fontStyle: 'normal',
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '500',
                    color: '#0568F2',
                    fontStyle: 'normal',
                    marginLeft: scale(5),
                  }}>
                  Register.
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(45),
    marginVertical: scale(17),
  },
  container: {
    flex: 1,
    // backgroundColor: '#DDDEDF',
  },
  TextOne: {
    color: '#fff',
    // fontWeight: '800',
    fontSize: scale(25),
    marginTop: scale(30),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    marginTop: scale(-8),
  },
  BlueBox: {
    backgroundColor: '#0568F2',
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: '#DDDEDF',
    height: verticalScale(500),
    // flex: 1,
  },
  MainContainer: {
    elevation: 5,
    height: scale(500),
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '17%',
    paddingHorizontal: 20,
    paddingVertical: scale(20),
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 237,
    height: 180,
  },
  viewText: {
    color: '#0568F2',
    fontSize: scale(15),
    fontWeight: '600',
  },
  FPassCon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginTop: scale(5),
  },
});
export default Login;
