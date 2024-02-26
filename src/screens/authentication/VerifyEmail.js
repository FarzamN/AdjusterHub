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
  KeyboardAvoidingView
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'

import Validation from '../../components/Validation'
import {useForm} from 'react-hook-form'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Color} from '../../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import {searchEmail} from '../../redux/actions/Auth'
import {useNavigation} from '@react-navigation/native'
import FailedModal from '../../components/Modals/FailedModal'
import {useDispatch} from 'react-redux'
const height = Dimensions.get('screen').height
const VerifyEmail = ({navigation}) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const type = 'vee'

  const submit = async (data) => {
    dispatch(searchEmail(data, navigation, setVisible, type))
  }
  return (
    <>
      <SafeAreaView style={styles.container} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        {/* <View style={{
        backgroundColor : '#ffffff'
      }} > */}
      <KeyboardAvoidingView behavior='padding' style={{flex:1}}
      enabled={true}
      keyboardVerticalOffset={verticalScale(50)}>
        <ScrollView styles={{flex: 1}} showsVerticalScrollIndicator={false}>
          <FailedModal
            isVisible={visible}
            setVisible={() => setVisible(false)}
            message={'Email does not exist'}
            subMessage={'Enter a valid email'}
          />
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
                  Verify Email
                </Text>
                <Text style={styles.TextTwo}>
                  Please Provide Your Valid Email
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
              }}>
              <Image
                source={require('../../assets/Images/logo.png')}
                style={styles.logo}
              />
            </View>
            <View style={{marginVertical: verticalScale(25)}}>
              <CustomInput
                name="email"
                rules={{
                  required: 'Email is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Email Address'}
                keyboardType={'email-address'}
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
              <CustomButton
                onPress={handleSubmit(submit)}
                containerStyle={{
                  marginTop: height * 0.05,
                  paddingVertical: verticalScale(12),
                }}
                textStyle={{
                  fontSize: scale(25),
                  // paddingVertical: moderateScale(15),
                }}
                title={'Verify'}
              />
            </View>
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
        {/* </View> */}
      </SafeAreaView>
    </>
  )
}

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
    backgroundColor: Color.White,
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
})
export default VerifyEmail