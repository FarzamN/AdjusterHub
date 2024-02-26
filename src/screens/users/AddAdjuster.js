import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import NewCustomInput from '../../components/NewCustomInput';
import Modal from 'react-native-modal';
import {launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { create_Adjuster } from '../../redux/actions/Auth';
import { clockRunning, log } from 'react-native-reanimated';
import LoaderModal from '../../components/Modals/loaderModal';


const height = Dimensions.get('screen').height;

const AddAdjuster = ({navigation, route}) => {

  const dispatch = useDispatch()
  const {company_id} = route.params
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] =  useState(null);



  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const {
    control,
    handleSubmit,
    formState: {
      errors,
       isValid
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
        setsaveimage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
        setShow(false);
      }
    });
  };



const submit = (data) => {
  if(data){
    
    create_Adjuster(data,saveimage,company_id,setModalVisible,setModalVisible3,setModalVisible2, navigation, setErrorMessage)
    } else{
      setModalVisible2(true)
    }
  } 

  return (
    <>
    <SafeAreaView style={styles.container}/>
    <SafeAreaView style={{flex:1, backgroundColor : Color.BackgroundColor}}>
      <StatusBar barStyle={'light-content'} />
      <View
      style={{flex: 1, backgroundColor : Color.BackgroundColor}}
      >
         <KeyboardAvoidingView behavior='padding' style={{flex:1}}
      enabled={true}
      keyboardVerticalOffset={verticalScale(50)}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{height: verticalScale(200)}}>
        <LinearGradient
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 0}}
          colors={['#056DFE', '#045CD2',]}
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
          <Text style={styles.TextOne}>Add adjuster</Text>
          <Text style={styles.TextTwo}>Don't see your adjuster? Add them!</Text>
        </View>
          </LinearGradient>
      </View>
        
        <View style={styles.GreyBox}></View>
        <View style={styles.MainContainer}>
          <View
            style={{
              height: verticalScale(180),
              width: scale(300),
              alignSelf: 'center',
              marginTop: scale(25),
            }}>
            <Image
              source={require('../../assets/Images/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <NewCustomInput
              name="first_name"
              rules={{
                required: 'First Name is required',
              }}
              control={control}
              style={[styles.textInput, styles.nameinput]}
              textStyle={styles.InputTextStyle}
              placeholder={'First Name'}
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
            name="email"
           // rules={{
             // required: 'Email is required',       
    //
    
    //        }}
            control={control}
            style={styles.textInput}
            textStyle={styles.InputTextStyle}
            placeholder={'Email'}
            keyboardType={'default'}
            restyle={{
              backgroundColor: Color.InputBackground,
              color: '#000',
              marginTop: scale(-10),
            }}
          />
         

          <TouchableOpacity onPress={() => photosave()} style={styles.Add}>
            <Text style={styles.Add_Text}>Add Image/Business Card</Text>
            <FontAwesome name={'photo'} size={35} color={Color.White} />
          </TouchableOpacity>

          <CustomButton
            // onPress={toggleModal}
            onPress={handleSubmit(submit)}
            title={'CReAtE ADJUSTER'}
            containerStyle={{
              marginTop: height * 0.04,
              paddingVertical: verticalScale(12)
            }}
            textStyle={{
              fontSize: scale(25),
              // paddingVertical: moderateScale(15),
            }}
           
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
                    fontFamily: 'Evogria',
                    color: Color.Main,
                    fontSize: scale(16),
                    textTransform: 'uppercase',
                  }}>
                  New Adjuster Added
                </Text>
                <Text style={{color: Color.Main, fontSize: scale(15),
                   fontFamily:'Helvetica'
                }}>
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

          <Modal
              onBackdropPress={() => setModalVisible2(false)}
              testID={'modal'}
              isVisible={isModalVisible2}>
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
                <View style={{width : "80%"}}>
                  <Text
                    style={{
                      color: Color.Main,
                      fontSize: errorMessage ? scale(13) : scale(16),
                      textTransform: 'uppercase',
                      fontFamily:'Evogria'
                    }}>
                {errorMessage == null  ? "Image is required!" : errorMessage} 
                  </Text>
                  {/* <Text style={{color: Color.Main, fontSize: scale(13),
                      fontFamily:'Helvetica',
                  }}
                  >
                    Thanks for your honest feedback
                  </Text> */}
                </View>
                <LottieView
                  style={{
                    width: scale(70),
                    height: scale(70),
                  }}
                  source={require('../../assets/Lottie/failed.json')}
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
      </KeyboardAvoidingView>
      </View>
      <LoaderModal onBackdropPress={() => setModalVisible3(true)}
          testID={'modal'}
          isVisible={isModalVisible3} />
    </SafeAreaView>
    </>
    
  );
};

const styles = StyleSheet.create({
  nameinput: {width: '49%', paddingLeft: 0},
  textInput: {height: verticalScale(50), marginBottom: verticalScale(25)},
  container: {
    flex: 0,
    backgroundColor: '#056DFE'
  },
  TextOne: {
    color: Color.White,
    fontFamily: 'Evogria',
    fontSize: scale(25),
    marginTop: scale(20),
    textTransform: 'uppercase',
  },
  TextTwo: {
    color: Color.White,
    fontSize: scale(15),
    fontFamily: 'Helvetica',
    marginTop:-5
  },
  BlueBox: {
    height: verticalScale(200),
    padding: moderateScale(20),
  
  },
  GreyBox: {
    height: verticalScale(460),
  },
  MainContainer: {
    height: Dimensions.get('screen').height * 0.72,
    backgroundColor: Color.White,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    paddingHorizontal: 20,
    borderRadius: 20,
    top: scale(130),
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
  Add: {
    backgroundColor: Color.PickImageBtn,
    width: '100%',
    height: verticalScale(50),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: scale(-15),
  },
  Add_Text: {
    color: Color.White,
    fontSize: scale(15),
    fontFamily: 'MyriadPro-Regular',
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
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
});
export default AddAdjuster;
