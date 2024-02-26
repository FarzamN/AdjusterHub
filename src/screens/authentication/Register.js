import React, {useState} from 'react'
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
  Dimensions,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Validation from '../../components/Validation'
import CustomInput from '../../components/CustomInput'
import {useForm} from 'react-hook-form'
import CustomButton from '../../components/CustomButton'
import {Color} from '../../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import {VerifyEmail} from '../../redux/actions/Auth'
import {useDispatch} from 'react-redux'
const height = Dimensions.get('screen').height

const Register = ({navigation}) => {
  const [password, setPassword] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true)
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const type = 'vee'

  const onSubmit = (data) => {
    dispatch(VerifyEmail(data, navigation, type))
  }
  return (
    <>
      <SafeAreaView style={styles.container} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <KeyboardAvoidingView behavior='padding' style={{flex:1}}
      enabled={true}
      keyboardVerticalOffset={verticalScale(50)}>
        <ScrollView showsVerticalScrollIndicator={false} 
        >
          <View styles={{height: '100%'}}>
            <View style={{height: verticalScale(200)}}>
              <LinearGradient
                // start={{x: 0, y: 0}}
                // end={{x: 1, y: 0}}
                colors={['#056DFE', '#045CD2']}
                style={{flex: 1}}>
                <View style={styles.BlueBox}>
                  <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
                    Register
                  </Text>
                  <Text style={styles.TextTwo}>Welcome!</Text>
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
                    // backgroundColor: 'red'
                  }}>
                  <Image
                    source={require('../../assets/Images/logo.png')}
                    style={styles.logo}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <CustomInput
                    name="firstName"
                    rules={{
                      required: 'First Name is required',
                    }}
                    control={control}
                    style={[styles.textInput, {width: '48.5%'}]}
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
                    name="lastName"
                    rules={{
                      required: 'Last Name is required',
                    }}
                    control={control}
                    style={[styles.textInput, {width: '48.5%'}]}
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
                {errors.firstName ? (
                  <Validation title={errors.firstName.message} />
                ) : errors.lastName ? (
                  <Validation title={errors.lastName.message} />
                ) : null}
                <CustomInput
                  name="email"
                  rules={{
                    required: '*Email is required',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: '*Enter a valid Email',
                    },
                  }}
                  control={control}
                  style={styles.textInput}
                  textStyle={styles.InputTextStyle}
                  placeholder={'Email Address'}
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
                    onChangeText={(text) => setPassword(text)}
                    name="password"
                    rules={{
                      required: '*Password is required',
                      minLength: {
                        value: 8,
                        message: '*Password too short (minimum length is 8)',
                      },
                      maxLength: {
                        value: 16,
                        message: '*Password too long (maximum length is 16)',
                      },
                    }}
                    control={control}
                    style={styles.textInput}
                    textStyle={styles.InputTextStyle}
                    placeholder={'Password'}
                    keyboardType={'default'}
                    fontSize={17}
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
                        : setIsPasswordSecure(true)
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: scale(15),
                      bottom: scale(7),
                    }}
                    onPress={() =>
                      setIsPasswordSecure((prevCheck) => !prevCheck)
                    }>
                    <Text style={styles.viewText}>
                      {isPasswordSecure ? 'SHOW' : 'HIDE'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Validation title={errors.password.message} />
                )}
                <CustomButton
                  onPress={handleSubmit(onSubmit)}
                  title={'register'}
                  containerStyle={{
                    marginTop:
                      (errors.password && errors.email) ||
                      errors.firstName ||
                      errors.lastName
                        ? height * 0.02
                        : height * 0.05,
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
                      fontSize: scale(13),
                      color: '#000',
                      fontFamily: 'Helvetica',
                    }}>
                    By tapping "Register" you accept our
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
                        fontFamily: 'Helvetica',
                      }}>
                      Terms of Service.
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(45),
    marginVertical: verticalScale(7),
  },
  container: {
    flex: 0,
    backgroundColor: '#056DFE',
  },
  TextOne: {
    color: Color.White,
    fontSize: scale(25),
    marginTop: scale(25),
    textTransform: 'uppercase',
  },
  TextTwo: {
    color: Color.White,
    fontSize: scale(17),
    fontFamily: 'Helvetica',
    marginTop: -5,
  },
  BlueBox: {
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: Color.BackgroundColor,
    height: verticalScale(480),
  },
  MainContainer: {
    // elevation: 5,
    backgroundColor: Color.White,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: scale(110),
    paddingHorizontal: 20,
    // paddingTop: scale(25),
    paddingVertical: verticalScale(18),
    // paddingBottom: moderateScale(30),
    borderRadius: 20,
    height: Dimensions.get('screen').height * 0.75,
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
    fontSize: scale(13),
    fontFamily: 'Helvetica',
    // fontWeight: '500',
  },
  FPassCon: {
    marginTop: scale(5),
    alignSelf: 'flex-end',
  },
})
export default Register