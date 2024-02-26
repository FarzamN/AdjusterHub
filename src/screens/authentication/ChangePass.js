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
  Dimensions,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'

import Validation from '../../components/Validation'
import {useForm} from 'react-hook-form'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Color} from '../../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import {changePassWord} from '../../redux/actions/Auth'
import {useDispatch} from 'react-redux'
import LoaderModal from '../../components/Modals/loaderModal'
const height = Dimensions.get('screen').height

const ChangePass = ({navigation, route}) => {
  const [password, setPassword] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true)
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const [password2, setPassword2] = useState('')
  const [isPasswordSecure2, setIsPasswordSecure2] = useState(true)
  const [isEnabled2, setIsEnabled2] = useState(true)
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState)
  const dispatch = useDispatch()
  const [isModalVisible2, setModalVisible2] = useState(false)

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const {userId} = route.params

  const sumbit = (data) => {
    if (data.password == data.c_password) {
      dispatch(changePassWord(data, userId, navigation,setModalVisible2))
    } else {
      setError(
        'c_password',
        {
          message: 'Password dose not match',
        },
        {
          shouldFocus: true,
        },
      )
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        {/* <View style={{
        backgroundColor : '#ffffff'
      }} > */}
        <ScrollView styles={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{height: verticalScale(200)}}>
            <LinearGradient
              // start={{x: 0, y: 0}}
              // end={{x: 1, y: 0}}
              colors={['#056DFE', '#045CD2']}
              style={{flex: 1}}>
              <View style={styles.BlueBox}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.5}
                  style={styles.arrow}>
                  <FontAwesome
                    style={styles.FontAwesomeArrow}
                    name={'angle-left'}
                    size={35}
                    color={Color.Main}
                  />
                </TouchableOpacity>
                <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
                  CREATE NEW PASSWORD
                </Text>
                <Text style={styles.TextTwo}>Make it unique!</Text>
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
              }}>
              <Image
                source={require('../../assets/Images/logo.png')}
                style={styles.logo}
              />
            </View>
            <View>
              <CustomInput
                secureTextEntry={isPasswordSecure}
                textContentType={'password'}
                value={password}
                onChangeText={text => setPassword(text)}
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
                  bottom: scale(10),

                  // justifyContent: 'flex-end',
                }}
                onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                <Text style={styles.viewText}>
                  {isPasswordSecure ? 'SHOW' : 'HIDE'}
                </Text>
              </TouchableOpacity>
            </View>
            {errors.password && <Validation title={errors.password.message} />}
            <View>
              <CustomInput
                secureTextEntry={isPasswordSecure}
                textContentType={'password'}
                value={password}
                onChangeText={text => setPassword(text)}
                name="c_password"
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
                placeholder={'Confirm Password'}
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
                  bottom: scale(10),
                }}
                onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                <Text style={styles.viewText}>
                  {isPasswordSecure ? 'SHOW' : 'HIDE'}
                </Text>
              </TouchableOpacity>
            </View>
            {errors.c_password && <Validation title={errors.c_password.message} />}
            <CustomButton
              onPress={handleSubmit(sumbit)}
              containerStyle={{
                marginTop: height * 0.05,
                paddingVertical: verticalScale(12),
              }}
              textStyle={{
                fontSize: scale(25),
                // paddingVertical: moderateScale(15),
              }}
              title={'Confirm'}
            />
          </View>
        </ScrollView>
        {/* </View> */}
        <LoaderModal onBackdropPress={() => setModalVisible2(true)}
          testID={'modal'}
          isVisible={isModalVisible2} />

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(45),
    marginVertical: scale(8),
  },
  container: {
    flex: 0,
    backgroundColor: '#056DFE',
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(23),
    marginTop: scale(20),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(15),
    fontFamily: 'Helvetica',
    marginTop: -5,
  },
  BlueBox: {
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    height: verticalScale(500),
  },
  MainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    height: Dimensions.get('screen').height * 0.68,
    alignSelf: 'center',
    position: 'absolute',
    top: scale(130),
    paddingHorizontal: 20,
    paddingTop: scale(35),
    borderRadius: 20,
    zIndex: 100,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.4,
    // paddingBottom: scale(3),
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewText: {
    color: '#0568F2',
    fontSize: scale(15),
    // fontWeight: '600',
  },
  FPassCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: scale(5),
  },
  arrow: {
    backgroundColor: Color.White,
    width: scale(32),
    height: scale(32),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FontAwesomeArrow: {
    marginRight: 3,
    marginTop: -2,
    // backgroundColor: 'red'
    alignSelf: 'center',
  },
});
export default ChangePass;
