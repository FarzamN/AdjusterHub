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

import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import NewCustomInput from '../../components/NewCustomInput';

import {launchImageLibrary} from 'react-native-image-picker';
const AddAdjuster = () => {
  const [showAnime, setShowAnime] = useState(false);
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
      <View styles={{height: '100%'}}>
        <View style={styles.BlueBox}>
          <Text style={styles.TextOne}>Add adjuster</Text>
          <Text style={styles.TextTwo}>Don`t see your adjuster? Add them!</Text>
        </View>
        <View style={styles.GreyBox}></View>

        <View style={styles.MainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require('../../assets/Images/logo.png')}
              style={styles.logo}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <NewCustomInput
                name="First Name"
                rules={{
                  required: 'First Name is required',
                }}
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'first_name'}
                keyboardType={'default'}
                restyle={{
                  marginTop: scale(10),
                  backgroundColor: Color.InputBackground,
                  color: '#000',
                  paddingHorizontal: moderateScale(45),
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
                placeholder={'Last Name'}
                keyboardType={'default'}
                restyle={{
                  marginTop: scale(10),
                  backgroundColor: Color.InputBackground,
                  color: '#000',
                  paddingHorizontal: moderateScale(45),
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
              }}
            />
            {errors.FirstName && <Validation title={errors.email.message} />}

            <TouchableOpacity onPress={() => photosave()} style={styles.Add}>
              <Text style={styles.Add_Text}>Add Image/business Card</Text>
              <FontAwesome name={'photo'} size={30} color={Color.White} />
            </TouchableOpacity>

            <CustomButton
              onPress={() => {
                setShowAnime(!showAnime);
              }}
              title={'CReAtE ADJUStER'}
              containerStyle={{
                alignSelf: 'center',
                width: '95%',
                height: verticalScale(50),
              }}
              textStyle={{fontSize: scale(20), fontWeight: '700'}}
            />
            {showAnime && (
              <View
                style={{
                  backgroundColor: '#fff',
                  position: 'absolute',
                  width: '100%',
                  flexDirection: 'row',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: Color.Main,
                      fontSize: scale(18),
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
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {height: verticalScale(50), marginBottom: scale(30)},
  container: {
    flex: 1,
  },
  TextOne: {
    color: '#fff',
    fontWeight: '800',
    fontSize: scale(25),
    marginTop: scale(30),
    textTransform: 'uppercase',
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
    top: '20%',
    paddingHorizontal: 20,
    paddingVertical: scale(20),
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 250,
    height: 180,
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
    marginTop: scale(10),
  },
  Add_Text: {
    color: Color.White,
  },
});
export default AddAdjuster;
