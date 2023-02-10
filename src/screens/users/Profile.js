import React, { useState } from 'react';
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
} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Modal from 'react-native-modal';
import {
  launchCamera,
  launchImageLibrary,
  ImagePicker,
} from 'react-native-image-picker';

import BackWithMenu from '../../components/BackWithMenu';

import Entypo from 'react-native-vector-icons/Entypo';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../utils/Colors';
import Validation from '../../components/Validation';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import NewCustomInput from '../../components/NewCustomInput';
import { color } from 'react-native-reanimated';

const Profile = ({ navigation }) => {
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);

  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = data => {
    console.log(data);
  };

  const requestCameraPermission = async () => {
    try {
      if (Platform.OS == 'ios') {
        toggleModal3();
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
        );
        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          toggleModal3();
        } else {
          console.log('Camera permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const photosave = () => {
    let options = {
      storageOptions: {
        mediaType: 'photo',
        path: 'image',
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('image picker');
      } else if (res.error) {
        console.log('image picker zindabad');
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        setShow(false);
        setModalVisible3(false);
      }
    });
  };
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {

      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        setShow(false);
      }
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0568F2' }}>
      <BackWithMenu
        onPress={() => navigation.openDrawer()}
        onPress_back={() => navigation.goBack()}
      />
      <View style={styles.BlueBox}>
        <View>
          {show ? (
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode={'stretch'}
              source={require('../../assets/Images/oldman.jpg')}
            />
          ) : (
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode={'stretch'}
              source={{ uri: saveimage }}
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
                  photosave();

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
                  setModalVisible3(false);
                }}
                style={{
                  backgroundColor: Color.Main,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: scale(21),
                  height: scale(21),
                  borderRadius: 20,
                  marginTop: scale(-10),
                }}>
                <Entypo name={'cross'} size={20} color={'#fff'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  cameraLaunch();
                  setModalVisible3(false);
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
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ height: verticalScale(350) }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <NewCustomInput
              name="first_name"
              rules={{
                required: 'First Name is required',
              }}
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'First Name'}
              keyboardType={'default'}
              restyle={{
                backgroundColor: '#F4F5F5',
                color: '#000',
              }}
            />
            <NewCustomInput
              name="last_name"
              rules={{
                required: 'Last Name is required',
              }}
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'last Name'}
              keyboardType={'default'}
              restyle={{
                backgroundColor: '#F4F5F5',
                color: '#000',
              }}
            />
            <NewCustomInput
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
                backgroundColor: '#F4F5F5',
                color: '#000',
              }}
            />
            <NewCustomInput
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
                marginTop: 0,
                backgroundColor: '#F4F5F5',
                color: '#000',
                margin: 0,
              }}
            />
            {errors.email && <Validation title={errors.email.message} />}

            <CustomButton
              title={'save changes'}
              containerStyle={{ marginTop: scale(20), width: '100%' }}
              textStyle={{ fontSize: scale(23) }}
              onPress={handleSubmit(onSubmit)}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // textInput: {height: verticalScale(50), marginVertical: scale(15)},
  BlueBox: {
    height: '35%',
  },
  GreyBox: {
    backgroundColor: '#DDDEDF',
    height: '65%',
  },
  editBox: {
    width: scale(35),
    height: scale(35),
    borderRadius: 100,
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 35,
    right: 10,
  },
  MainContainer: {
    // height: verticalScale(350),
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    top: '40%',
    paddingHorizontal: 20,
    borderRadius: 20,
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
    height: scale(100)
  },
  tinyLogo: {
    height: scale(32),
    width: scale(35),
  },
  tinyLogo2: {
    height: scale(32),
    width: scale(35),
  },
});

export default Profile;
