import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import NewCustomInput from '../../components/NewCustomInput';
import Modal from 'react-native-modal';

import {launchImageLibrary} from 'react-native-image-picker';
const AddAdjuster = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const {
    control,
    // handleSubmit,
    formState: {
      errors,
      //  isValid
    },
  } = useForm({mode: 'all'});

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
        console.log('nhh hay ez piasa');
      } else if (res.error) {
        console.log('nhh hay ez piasa bro');
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        setShow(false);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.BlueBox}>
          <Text style={styles.TextOne}>Add adjuster</Text>
          <Text style={styles.TextTwo}>Don't see your Adjuster? Add them!</Text>
        </View>
        <View style={styles.GreyBox}></View>
        <View style={styles.MainContainer}>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={styles.logo}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <NewCustomInput
              name="First Name"
              rules={{
                required: 'First Name is required',
              }}
              control={control}
              style={[styles.textInput, styles.nameinput]}
              textStyle={styles.InputTextStyle}
              placeholder={'First name'}
              keyboardType={'default'}
              restyle={{
                marginTop: scale(10),
                backgroundColor: Color.InputBackground,
                color: '#000',
              }}
            />
            <NewCustomInput
              name="last_name"
              rules={{
                required: 'Last Name is required',
              }}
              control={control}
              style={[styles.textInput, styles.nameinput]}
              textStyle={styles.InputTextStyle}
              placeholder={'Last Name'}
              keyboardType={'default'}
              restyle={{
                marginTop: scale(10),
                backgroundColor: Color.InputBackground,
                color: '#000',
              }}
            />
          </View>

          <NewCustomInput
            name="insurance_company"
            rules={{
              required: 'Email is required',
            }}
            control={control}
            style={styles.textInput}
            textStyle={styles.InputTextStyle}
            placeholder={'Insurance Company'}
            keyboardType={'default'}
            restyle={{
              backgroundColor: Color.InputBackground,
              color: '#000',
              marginTop: scale(-10),
            }}
          />
          {errors.FirstName && <Validation title={errors.email.message} />}

          <TouchableOpacity onPress={() => photosave()} style={styles.Add}>
            <Text style={styles.Add_Text}>Add Image/business Card</Text>
            <FontAwesome name={'photo'} size={35} color={Color.White} />
          </TouchableOpacity>

          <CustomButton
            onPress={toggleModal}
            title={'CReAtE ADJUSTER'}
            containerStyle={{
              alignSelf: 'center',
              width: '95%',
              paddingVertical: moderateScale(15),
              marginTop: scale(20),
            }}
            textStyle={{fontSize: scale(20)}}
          />
          <Modal
            testID={'modal'}
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}>
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
                    fontFamily: 'gazrg-bold',
                    color: Color.Main,
                    fontSize: scale(16),
                    textTransform: 'uppercase',
                  }}>
                  New Adjuster Added
                </Text>
                <Text style={{color: Color.Main, fontSize: scale(15)}}>
                  Thanks for your input
                </Text>
              </View>
              <LottieView
                style={{
                  width: 100,
                  height: 100,
                  // marginTop: scale(-10),
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
          <View style={{height: verticalScale(50)}}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameinput: {width: '49%', paddingLeft: 0},
  textInput: {height: verticalScale(50), marginBottom: scale(35)},
  container: {
    flex: 1,
    backgroundColor: '#DDDEDF',
  },
  TextOne: {
    color: '#fff',
    fontFamily: 'gazrg-bold',
    fontSize: scale(25),
    marginTop: scale(30),
    textTransform: 'uppercase',
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    marginTop: scale(-8),
  },
  BlueBox: {
    height: verticalScale(200),
    padding: moderateScale(20),
    backgroundColor: '#045CD2',
  },
  GreyBox: {
    height: verticalScale(500),
  },
  MainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '15%',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 237,
    height: 180,
    marginTop: scale(30),
  },
  Add: {
    backgroundColor: '#545456',
    width: '95%',
    height: verticalScale(50),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: scale(-10),
  },
  Add_Text: {
    color: Color.White,
    fontSize: scale(15),
  },
});
export default AddAdjuster;
