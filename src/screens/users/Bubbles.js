import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  
} from 'react-native';
import Modal from 'react-native-modal';
import BackAndLogo from '../../components/BackAndLogo';
import {Color} from '../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import NewCustomInput from '../../components/NewCustomInput';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import {SubmitFeedback} from '../../redux/actions/Auth';
import { useFocusEffect } from '@react-navigation/native';
import FailedModal from '../../components/Modals/FailedModal';

const Bubbles = ({navigation, route}) => {
  const {adjuster_id} = route?.params;
  const [errorMessage, setErrorMessage] =  useState(null);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const phrases = useSelector(state => state.get_phrases);
  const [rating, setRating] = useState(0);
  const [select, setSelect] = useState([]);
  const [show, setshow] = useState(false)
  const [failed, setFailed] = useState(false)
  const [subMessage, setSubMessage] =  useState();


  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});


  const handleChange = item => {
    // console.log('ITEM IN HANDLER ==>', item)
    if (select.includes(item.feedback_id)) {
      let temp = select.filter(element => element != item.feedback_id);
      // console.log('temp ==> Array', temp)
      setSelect([...temp]);
    } else {
      let temp = select;
      temp.push(item.feedback_id);
      setSelect([...temp]);
      // console.log('khatam temp array ==>', temp)
    }
  };



  const onSubmit = data => {
    console.log("Data in On sublit ==>",data);

    if (select.length < 1) {
      setSubMessage("Please add at least one description")
      setFailed(true);
    } 
    else if (rating <= 0) {
      setSubMessage("Please add a rating")
      setFailed(true);
    }
    else if (data.claim == "") {
      setSubMessage("Please add a claim number")
      setFailed(true);
    }
    else {
      SubmitFeedback(
        data.claim,
        rating,
        select,
        adjuster_id,
        setModalVisible,
        setModalVisible2,
        navigation,
        setErrorMessage
      )
    }
  };

   
  return (
    <>
      <SafeAreaView style={styles.container} />
      <KeyboardAvoidingView behavior='padding' style={{flex :1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <FailedModal
        isVisible={failed}
        setVisible={()=> setFailed(false)}
        message={"Incomplete submission"}
        subMessage={subMessage}
        />
        {/* <ScrollView showsVerticalScrollIndicator={false} > */}
          <BackAndLogo onPress={() => navigation.goBack()} />
          <View style={{height: verticalScale(200)}}>
            <LinearGradient
              // start={{x: 0, y: 0}}
              // end={{x: 1, y: 0}}
              colors={['#056DFE', '#045CD2']}
              style={{flex: 1}}>
              <View style={styles.BlueBox}>
                <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
                  DESCRIBE YOUR ADJUSTER
                </Text>
                <Text style={styles.TextTwo}>Be intentional!</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{position: 'absolute', top: 90, width: '100%'}}>
            <View style={styles.MainBox}>
              <KeyboardAvoidingView behavior='padding' style={{flex:1}}
      enabled={true}
      keyboardVerticalOffset={verticalScale(80)}>
              {/* <ScrollView > */}
              <ScrollView>

              <View style={{flexWrap : 'wrap', flexDirection:'row',  paddingHorizontal: scale(7)}}>
                {phrases?.map(item => {
                  return (
                    <View style={styles.bubbleBox}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: select.includes(item.feedback_id)
                            ? '#2B83FE'
                            : '#E4E5E6',
                          borderRadius: scale(15),
                          margin: 2,
                          paddingHorizontal: scale(12),
                        }}
                        activeOpacity={0.9}
                        onPress={() => handleChange(item)}>
                        <Text
                          style={[
                            styles.bubbles,
                            {
                              fontSize: 14,
                              letterSpacing: 0.1,
                              color: select.includes(item.feedback_id)
                                ? Color.White
                                : Color.Black,
                            },
                          ]}>
                          {item.feedback}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}

              </View>
              </ScrollView>
              
              <View
                style={{
                  width: '50%',
                  alignSelf: 'center',
                  marginTop: scale(10),
                }}>
                <StarRating
                  fullStarColor={Color.Main}
                  starSize={30}
                  halfStarEnabled={true}
                  disabled={false}
                  maxStars={5}
                  rating={rating}
                  selectedStar={setRating}
                />
              </View>
              <NewCustomInput
                name="claim"
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Claim #'}
                keyboardType={'number-pad'}
                // onFocus={() => setshow(true)}
                // onBlur={() => setshow(false)}
                restyle={{
                  width: '93%',
                  alignSelf: 'center',
                  backgroundColor: '#F4F5F5',
                  color: '#000',
                  borderRadius: 5,
                  paddingHorizontal: moderateScale(20),
                  height: verticalScale(45),
                }}
              />
               <CustomButton
                onPress={handleSubmit(onSubmit)}
                title={'Submit'}
                containerStyle={{
                  width: '93%',
                  alignSelf: 'center',
                  marginTop: scale(20),
                  paddingVertical: verticalScale(12),
                }}
                textStyle={{
                  fontSize: scale(25),
                  
                }}
              />
          
             

             
              <Modal
                // onBackdropPress={() => navigation.goBack()}
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
                      FeedBack Added
                    </Text>
                    <Text
                      style={{
                        color: Color.Main,
                        fontSize: scale(13),
                        fontFamily: 'Helvetica',
                      }}>
                      Thanks for your honest feedback
                    </Text>
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

              <Modal
                onBackdropPress={() => setModalVisible2(false)}
                testID={'modal'}
                isVisible={isModalVisible2}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 100,
                    width: '100%',
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
                        fontSize: errorMessage ? scale(12):scale(16),
                        textTransform: 'uppercase',
                        fontFamily: 'Evogria',
                        
                      }}
                      adjustsFontSizeToFit ={true}
                      >
                        {errorMessage} 
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
                      width: scale(60),
                      height: scale(60),
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

              <View style={{height: show ? verticalScale(100) : verticalScale(30)}}></View>
              {/* </ScrollView> */}
              </KeyboardAvoidingView>
            </View>
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: Color.White,
  },
  textInput: {
    height: verticalScale(50),
  },

  MainBox: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(15),
    borderRadius: 20,
    paddingTop: verticalScale(15),
    paddingHorizontal: 5,
    height: Dimensions.get('screen').height * 0.71,
    zIndex: 100,
    top: scale(45),
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 0],
    shadowRadius: 4,
    shadowOpacity: 0.4,
    paddingHorizontal: 5,
  },
  Describe: {
    color: Color.White,
    marginVertical: verticalScale(10),
    fontSize: scale(25),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },
  bubbles: {
    paddingVertical: moderateScale(6),
    // paddingHorizontal: scale(12),
    borderRadius: 15,
    color: Color.Black,
    textAlign: 'center',
    margin: scale(3),
    textTransform: 'capitalize',
    fontFamily: 'MyriadPro-Regular',
  },
  bubbleBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: scale(2),
    // marginLeft: scale(7),
  },
  inputText: {
    alignSelf: 'center',
    backgroundColor: Color.BackgroundColor,
    width: '70%',
    height: verticalScale(40),
    borderRadius: 10,
    marginVertical: scale(5),
    paddingLeft: scale(20),
    color: Color.Black,
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(24),
    marginTop: scale(25),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    fontFamily: 'Helvetica',
    marginTop: -5,
  },
  BlueBox: {
    marginTop: -30,
    //justifyContent : "center",
    height: Dimensions.get('screen').height * 0.2,
    padding: moderateScale(18),
  },
});

export default Bubbles;
