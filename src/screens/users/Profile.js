import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import Modal from 'react-native-modal'
import {
  launchCamera,
  launchImageLibrary,
  ImagePicker,
} from 'react-native-image-picker'

import BackWithMenu from '../../components/BackWithMenu'

import Entypo from 'react-native-vector-icons/Entypo'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Color} from '../../utils/Colors'
import Validation from '../../components/Validation'
import {useForm} from 'react-hook-form'
import CustomButton from '../../components/CustomButton'
import NewCustomInput from '../../components/NewCustomInput'
import {color} from 'react-native-reanimated'
import {useDispatch, useSelector} from 'react-redux'
import {baseUrl, imageURl, imageURl2} from '../../utils/APIEssentials'
import {update_Profile} from '../../redux/actions/Auth'
import LottieView from 'lottie-react-native'
import LoaderModal from '../../components/Modals/loaderModal'

const Profile = ({navigation,route}) => {
  const userData = useSelector((state) => state.userDetails)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isModalVisible2, setModalVisible2] = useState(false)
  const [isModalVisible3, setModalVisible3] = useState(false)
  const [saveimage, setsaveimage] = useState({})
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()

  console.log(userData)



  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3)
  }
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstName: userData?.firstname,
      lastName: userData?.lastname,
      email: userData?.email,
    },
  })

  
  const requestCameraPermission = async () => {
    try {
      if (Platform.OS == 'ios') {
        toggleModal3()
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'App Gallery Permission',
            message: 'App needs access to your gallery ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        )
        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera')
          toggleModal3()
        } else {
          console.log('Camera permission denied')
        }
      }
    } catch (err) {
      console.warn(err)
    }
  }
  const photosave = () => {
    let options = {
      storageOptions: {
        mediaType: 'photo',
        path: 'image',
        includeExtra: true,
      },
      selectionLimit: 1,
    }

    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log('image picker')
      } else if (res.error) {

        console.log('image picker ezpz')
      } else if (res.customButton) {
        alert(res.customButton)
      } else {
        setsaveimage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        })
        setShow(false)
        setModalVisible3(false)
      }
    })
  }
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    launchCamera(options, (res) => {
      console.log('Response = ', res)
      if (res.didCancel) {
        console.log('User cancelled image picker')
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        alert(res.customButton)
      } else {
        setsaveimage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        })
        setShow(false)
        // setModalVisible3(false);
      }
    })
  }
  const onSubmit = (data) => {
    console.log(data)
    if (data) {
      dispatch(update_Profile(data, saveimage, setModalVisible, setModalVisible2))
    }
  }
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: Color.White}} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <StatusBar barStyle={'dark-content'} />
        <KeyboardAvoidingView behavior='padding' style={{flex:1}}
      enabled={true}
      keyboardVerticalOffset={verticalScale(50)}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <BackWithMenu
            onPress={() => navigation.openDrawer()}
            onPress_back={() => navigation.goBack()}
          />
          <View style={styles.BlueBox}>
            <View>
              {show ? (
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode='cover'
                  source={{uri: imageURl + userData.profile_image}}
                />
              ) : (
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode='cover'
                  source={{uri: saveimage?.uri}}
                />
              )}
            </View>

            <TouchableOpacity
              onPress={requestCameraPermission}
              style={styles.editBox}>
              <FontAwesome name={'pencil'} size={22} color={Color.Black} />
            </TouchableOpacity>
            <Modal
              backdropOpacity={0.2}
              onBackdropPress={() => setModalVisible3(false)}
              isVisible={isModalVisible3}
              style={{
                width: '100%',
                position: 'relative',
                right: scale(18),
                top: scale(20),
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <View style={styles.SecCon}>
                  <TouchableOpacity
                    onPress={() => {
                      photosave()
                    }}
                    style={styles.ModalBtn}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/Images/photo.png')}
                    />
                    <Text style={styles.Text1}>Upload picture</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible3(false)
                    }}
                    style={{
                      backgroundColor: Color.Main,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: scale(30),
                      height: scale(30),
                      borderRadius: 50,
                      marginTop: scale(-15),
                    }}>
                    <Entypo name={'cross'} size={25} color={'#fff'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      cameraLaunch()
                      setModalVisible3(false)
                    }}
                    style={styles.ModalBtn}>
                    <Image
                      style={styles.tinyLogo2}
                      source={require('../../assets/Images/camera.png')}
                    />
                    <Text style={styles.Text1}>Take a picture</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.GreyBox}></View>

          <View style={styles.MainContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <NewCustomInput
                name="firstName"
                rules={{
                  required: 'First Name is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'First Name'}
                keyboardType={'default'}
                restyle={{
                  backgroundColor: Color.InputBackgroundTwo,
                  color: Color.Black,
                }}
              />
              <NewCustomInput
                name="lastName"
                rules={{
                  required: 'Last Name is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Last Name'}
                keyboardType={'default'}
                restyle={{
                  backgroundColor: Color.InputBackgroundTwo,
                  color: Color.Black,
                }}
              />
              {/* <NewCustomInput
                name="company"
                rules={{
                  required: 'Company is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Company'}
                keyboardType={'default'}
                restyle={{
                  backgroundColor: Color.InputBackgroundTwo,
                  color: Color.Black,
                }}
              /> */}
              <NewCustomInput
                name="email"
                rules={{
                  required: 'Email is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Email@gmail.com'}
                keyboardType={'email-address'}
                restyle={{
                  marginTop: 0,
                  color: Color.Black,
                  margin: 0,
                }}
              />
              {errors.email && <Validation title={errors.email.message} />}

              <CustomButton
                title={'save changes'}
                containerStyle={{
                  marginTop: scale(20),
                  width: '100%',
                  paddingVertical: moderateScale(15),
                }}
                textStyle={{fontSize: scale(25)}}
                onPress={handleSubmit(onSubmit)}
              />
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
        <LoaderModal onBackdropPress={() => setModalVisible2(true)}
          testID={'modal'}
          isVisible={isModalVisible2} />

        <Modal
          onBackdropPress={() => setModalVisible(false)}
          testID={'modal'}
          isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              top: 100,
              width: '90%',
              flexDirection: 'row',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              alignSelf: 'center',
              borderColor: Color.Main,
              paddingLeft: 20,
            }}>
            <View>
              <Text
                style={{
                  color: Color.Main,
                  fontSize: scale(16),
                  textTransform: 'uppercase',
                  fontFamily: 'Evogria',
                }}>
                Updated successfully
              </Text>
              {/* <Text
                style={{
                  color: Color.Main,
                  fontSize: scale(13),
                  fontFamily: 'Helvetica',
                }}>
                Thanks for your honest feedback
              </Text> */}
            </View>
            <LottieView
              style={{
                width: 100,
                height: 100,
              }}
              source={require('../../assets/Lottie/thanks.json')}
              colorFilters={[
                {
                  keypath: 'button',
                  color: '#E94057',
                },
              ]}
              autoPlay
              loop
            />
          </View>
        </Modal>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {height: verticalScale(50), marginVertical: verticalScale(-2)},
  BlueBox: {
    height: verticalScale(200),
  },
  GreyBox: {
    backgroundColor: Color.BackgroundColor,

    height: verticalScale(380),
  },
  editBox: {
    width: scale(35),
    height: scale(35),
    borderRadius: 100,
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 13,
  },
  MainContainer: {
    height: Dimensions.get('screen').height * 0.5,
    width: '94%',
    backgroundColor: Color.White,
    alignSelf: 'center',
    position: 'absolute',
    top: scale(260),
    paddingHorizontal: scale(20),
    // paddingVertical : 0,
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    // alignItems:'center'
  },
  ModalBtn: {
    flex: 1,
    backgroundColor: 'white',
    margin: scale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text1: {
    fontSize: scale(11),
    fontWeight: '600',
    color: Color.Main,
  },
  SecCon: {
    height: verticalScale(50),
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
  },
  tinyLogo: {
    height: scale(32),
    width: scale(35),
  },
  tinyLogo2: {
    height: scale(32),
    width: scale(35),
  },
})

export default Profile