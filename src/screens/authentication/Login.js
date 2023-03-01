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
  Dimensions,
  
} from 'react-native';
import {scale, moderateScale, verticalScale, moderateVerticalScale} from 'react-native-size-matters';

import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('screen').height;
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

  console.log('++++++++++++++++++++>', height);
  return (
    <>
    <SafeAreaView style={styles.container}/>
      <SafeAreaView style={{flex:1, backgroundColor: Color.BackgroundColor}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View style={{height: verticalScale(200)}}>
          <LinearGradient
            // start={{x: 0, y: 0}}
            // end={{x: 1, y: 0}}
            colors={[ '#056DFE','#045CD2',  ]}
            style={{flex: 1}}>
<View style={styles.BlueBox}>
          <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
            WELCOME BACK
          </Text>
          <Text style={styles.TextTwo}>It's good to see you again!</Text>
        </View>
            </LinearGradient>
        </View>
        
        <View style={styles.GreyBox}></View>
        <View style={styles.MainContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, {backgroundColor: Color.White}]}>
            <View
              style={{
                height: verticalScale(180),
                width: "95%",
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../assets/Images/logo.png')}
                style={styles.logo}
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
                onPress={() => navigation.navigate('changePass')}>
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
              onPress={() => navigation.navigate('DrawerNavigation')}
              title={'login'}
              
              containerStyle={{
                marginTop: scale(height * 0.05),
                paddingVertical: verticalScale(12)
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
              <TouchableOpacity onPress={() => navigation.navigate('register')}>
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
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
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
    backgroundColor: "#056DFE"
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(25),
    marginTop: scale(20),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    fontFamily: 'Helvetica',
    marginTop:-5
  },
  BlueBox: {
    height: scale(height * 0.28),
    padding: moderateScale(20),
  },
  // GreyBox: {
  //   backgroundColor: Color.BackgroundColor,
  //   height: scale(height * 0.55),
  // },
  MainContainer: {
    elevation: 5,
    height: scale(height * 0.65),
    backgroundColor: Color.White,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: 110,
    paddingHorizontal: 20,
    paddingVertical: scale(20),
    borderRadius: 20,
    zIndex : 100,
    shadowColor : 'rgba(0,0,0)',
    shadowOffset : [1,1],
    shadowRadius : 5,
    shadowOpacity : 0.4
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewText: {
    
    color: Color.Main,
    fontSize: scale(15),
    fontWeight: '600',

  },
  FPassCon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Login;
