import React, {useState, useEffect} from 'react';
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
  Dimensions,
  LogBox,
} from 'react-native';
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {LogIn} from '../../redux/actions/Auth';
import FailedModal from '../../components/Modals/FailedModal';

const height = Dimensions.get('screen').height;
const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const Dispatch = useDispatch();
  const submit = data => {
    console.log('LOGIN DATA ==>', data);
    Dispatch(LogIn(data, setVisible, setVisible2));
  };

  return (
    <>
      <SafeAreaView style={styles.container} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled={true}
          keyboardVerticalOffset={verticalScale(50)}>
          <ScrollView style={{height: '100%', width: '100%'}}>
            <FailedModal
              isVisible={visible}
              setVisible={() => setVisible(false)}
              message={'Invalid Credentials'}
              subMessage={'Enter correct credentials'}
            />
            <FailedModal
              isVisible={visible2}
              setVisible={() => setVisible2(false)}
              message={'your account has been suspended'}
              top={scale(5)}
            />
            <View style={{height: verticalScale(200)}}>
              <LinearGradient
                // start={{x: 0, y: 0}}Í
                // end={{x: 1, y: 0}}
                colors={['#056DFE', '#045CD2']}
                style={{flex: 1}}>
                <View style={styles.BlueBox}>
                  <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
                    WELCOME BACK
                  </Text>
                  <Text style={styles.TextTwo}>
                    It's good to see you again!
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View style={styles.GreyBox}></View>
            <View style={styles.MainContainer}>
              <View
                style={{
                  height: verticalScale(180),
                  width: '95%',
                  alignSelf: 'center',
                  // marginTop: verticalScale(5),
                }}>
                <Image
                  source={require('../../assets/Images/logo.png')}
                  style={styles.logo}
                />
              </View>
              <CustomInput
                name="email"
                rules={{
                  required: 'Email is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Email Address'}
                keyboardType={'default'}
                restyle={{
                  paddingHorizontal: moderateScale(40),
                  backgroundColor: Color.InputBackgroundTwo,
                  color: Color.Black,
                }}
                PIname={'email'}
                PIsize={22}
                PIcolor={'#999B9E'}
                PIstylye={{
                  position: 'absolute',
                  bottom: scale(19),
                  left: scale(12),
                }}
              />
              {errors.email && <Validation REStyle={{top: scale(7)}} title={errors.email.message} />}
              <View style={{height :20 }}></View>
              <View>
                <CustomInput
                  secureTextEntry={isPasswordSecure}
                  textContentType={'password'}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  name="password"
                  rules={{
                    required: 'Password is required',
                  }}
                  control={control}
                  style={styles.textInput}
                  textStyle={styles.InputTextStyle}
                  placeholder={'Password'}
                  keyboardType={'default'}
                  restyle={{
                    marginTop: scale(-15),
                    backgroundColor: Color.InputBackgroundTwo,
                    color: Color.Black,
                  }}
                  PIname2={'locked'}
                  PIsize2={20}
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
                    bottom: scale(30),
                  }}
                  onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                  <Text style={styles.viewText}>
                    {isPasswordSecure ? 'SHOW' : 'HIDE'}
                  </Text>
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Validation REStyle={{bottom: scale(8)}} title={errors.password.message} />
              )}
              <View style={[styles.FPassCon, {marginTop: scale(0)}]}>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontFamily: 'Helvetica',
                    color: '#000',
                  }}>
                  Forgot Password?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('verifyEmail')}>
                  <Text
                    style={{
                      fontSize: scale(14),
                      color: Color.Main,
                      marginLeft: scale(5),
                      fontFamily: 'Helvetica',
                    }}>
                    Reset Here.
                  </Text>
                </TouchableOpacity>
              </View>
              <CustomButton
                onPress={handleSubmit(submit)}
                title={'login'}
                containerStyle={{
                  marginTop: height * 0.04,
                  paddingVertical: verticalScale(12),
                }}
                textStyle={{
                  fontSize: scale(25),
                  // paddingVertical: moderateScale(15),
                }}
              />
              <View style={styles.FPassCon}>
                <Text
                  style={{
                    fontSize: scale(14),
                    color: '#000',
                    fontFamily: 'Helvetica',
                  }}>
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('register')}>
                  <Text
                    style={{
                      fontSize: scale(14),
                      color: Color.Main,
                      fontFamily: 'Helvetica',
                      marginLeft: scale(5),
                    }}>
                    Register.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(45),
    marginVertical: verticalScale(14),
  },
  container: {
    flex: 0,
    backgroundColor: '#056DFE',
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(25),
    marginTop: scale(25),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    fontFamily: 'Helvetica',
    marginTop: -5,
  },
  BlueBox: {
    //justifyContent : "center",
    height: height * 0.28,
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: Color.BackgroundColor,
    height: verticalScale(480),
  },
  MainContainer: {
    height: height * 0.78,
    backgroundColor: Color.White,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: scale(110),
    paddingHorizontal: 20,
    paddingTop: scale(35),
    borderRadius: 20,
    zIndex: 100,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewText: {
    color: Color.Main,
    fontSize: scale(15),
    // fontWeight: '600',
  },
  FPassCon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Login;
