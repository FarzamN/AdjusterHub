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
import { Color } from '../../utils/Colors';

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
    <SafeAreaView style={styles.container} >
      <View styles={{height: '100%'}}>
        <View style={styles.BlueBox}>
          <Text style={styles.TextOne}>WELCOME BACK</Text>
          <Text style={styles.TextTwo}>Its good to see you agaon!</Text>
        </View>
        <View style={styles.GreyBox}></View>

        <View style={styles.MainContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, {backgroundColor : Color.White}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                  bottom: scale(18),
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
                    bottom: scale(34),
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
                    // justifyContent: 'flex-end',
                  }}
                  onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                  <Text style={styles.viewText}>
                    {isPasswordSecure ? 'SHOW' : 'HIDE'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.FPassCon, {marginTop: scale(10)}]}>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '500',
                    color: '#000',
                    fontStyle: 'normal',
                  }}>
                  Forget Password?
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
                    Reset Here
                  </Text>
                </TouchableOpacity>
              </View>
              <CustomButton
                onPress={() => navigation.navigate('DrawerNavigation')}
                title={'LOGIN'}
                textStyle={{fontSize: scale(27)}}
              />
              <View style={styles.FPassCon}>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '500',
                    color: '#000',
                    fontStyle: 'normal',
                  }}>
                  Dont have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('register')}>
                  <Text
                    style={{
                      fontSize: scale(14),
                      fontWeight: '500',
                      color: '#0568F2',
                      fontStyle: 'normal',
                      marginLeft: scale(5),
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {height: verticalScale(50), marginVertical: scale(15)},
  container: {
    flex: 1,
    backgroundColor : '#0568F2'
  },
  TextOne: {
    color: '#fff',
    fontWeight: '800',
    fontSize: scale(25),
    marginTop: scale(30),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
  },
  BlueBox: {
    backgroundColor: '#0568F2',
    height: '35%',
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: '#DDDEDF',
    height: '65%',
  },
  MainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '22%',
    paddingHorizontal: 20,
    paddingVertical: scale(20),
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 250,
    height: 180,
  },
  viewText: {
    color: '#0568F2',
    fontSize: scale(15),
    fontWeight: '600',
  },
  FPassCon: {
    marginTop : 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginTop: scale(5),
  },
});
export default Login;
