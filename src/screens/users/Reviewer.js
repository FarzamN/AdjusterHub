import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import BackAndLogo from '../../components/BackAndLogo';
import {Color} from '../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/CustomButton';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useForm} from 'react-hook-form';
import ModalBubble from '../../components/Modals/ModalBubble';
import {baseUrl, imageURl, token} from '../../utils/APIEssentials';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import StarRating from 'react-native-star-rating'

const height = Dimensions.get('screen').height;

const Person = ({navigation, route}) => {
  const {adjusterId, companyLogo} = route.params;
  const [adjuster_data, setAdjuster_data] = useState();


  useFocusEffect(
    useCallback(() => {
      adjusterHistory();
    }, []),
  );


  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});



  const adjusterHistory = async () => {
    try {
      let Base_Url = `${baseUrl}/get_adjuster_history.php`;
      let myData = new FormData();

      myData.append('token', token);
      myData.append('adjuster_id', adjusterId);

      const response = await fetch(Base_Url, {
        method: 'post',
        body: myData,
      });

      const responseData = await response.json();
      if (responseData.status == true) {
        console.log("===>",responseData.Data);
        setAdjuster_data(responseData.Data);
      } else {
        console.log('else error SubmitFeedback');
      }
    } catch (e) {
      console.log('adjusterHistory errror', e);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <BackAndLogo onPress={() => navigation.goBack()} />
          <View style={{height: verticalScale(200)}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#056DFE', '#045CD2']}
              style={{flex: 1}}></LinearGradient>
          </View>

          <View style={{position: 'absolute', top: '25%', width: '100%'}}>
            <View style={styles.MainBox}>

              {
                adjuster_data?.image ?

                
                <Image
                style={styles.Photo}
                source={{uri: imageURl + adjuster_data?.image}}
                />
               :   
           
               <View style={{
                height: Dimensions.get('screen').height * 0.27,
                aspectRatio: 1 / 1,
                borderRadius: 200,
                alignSelf: 'center',
                marginTop: scale(-100),
                borderColor: Color.White,
                borderWidth: 2,
                backgroundColor: 'lightgrey',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'rgba(0,0,0)',
                shadowOffset: [1, 1],
                shadowRadius: 1,
                shadowOpacity: 0.4,
               }}>
                <Text style={{
                  fontSize: scale(13),
                  color: 'black',
                  fontFamily: 'Helvetica',
                }}>No text found</Text>
               </View>
              }
              <Image
                style={styles.companyLogo}
                source={{uri: imageURl + companyLogo}}
              />

          
              <View style={styles.name}>
                <Text style={styles.Text_Name}>
                  {adjuster_data?.first_name} {adjuster_data?.last_name}
                </Text>

                <View style={{
                  height: '25%',
                   flexDirection:'row'
                }}>
                  <View style={{ flex: 1 }}>
                  <Text style={styles.number}>
                    {adjuster_data?.num_of_reviews != null ? adjuster_data?.num_of_reviews : '00'}
                  </Text>
            
                    <Text style={styles.rating}>Reviews</Text>
                
                  </View>
                  <View style={{ flex: 2.1 }}>
                    <View style={{ flexDirection: 'row' }}>

                  <Text style={[styles.number]}>
                    {adjuster_data?.rating?.toFixed(2) != null ? adjuster_data?.rating?.toFixed(2) : '00'}
                  </Text>
                  <Entypo
                    style={{
                      marginTop: scale(2.5),
                    }}
                    name={'star'}
                    color={'black'}
                    size={20}
                  />
                   {/* <StarRating
                fullStarColor={Color.Main}
                starSize={20}
                halfStarEnabled={true}
                disabled={false}
                maxStars={1}
                rating={adjuster_data?.rating != null ? adjuster_data?.rating: 0}
               
              /> */}
                  </View>
                  <Text style={[styles.rating]}>Rating</Text>
                  </View>
                </View>
              
                <View style={{flex: 1}}>
                  <Text style={styles.topContaintor}>
                    Top Contractor Comments
                  </Text>

                  {
                    adjuster_data?.feedbacks != null ?
                  <ScrollView style={styles.bubbleBox} contentContainerStyle={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
                    
                    {adjuster_data?.feedbacks?.reverse()?.map((item) => {
                      return (
                        <View style={styles.DisableBBl}>
                          <Text style={styles.bubbles}>{item?.feedback}</Text>
                        </View>
                      );
                    })}
                    {/* <FlatList 
          data={adjuster_data?.feedbacks}
          keyExtractor={(item) => item?.feedback_id}
          renderItem={({item}) => (
            <View style={styles.DisableBBl}>
            <Text style={styles.bubbles}>{item?.feedback}</Text>
          </View>
          ) }
          numColumns={3}
          /> */}
                  </ScrollView>
                    : <View style={{ height: '70%',width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                      fontSize: scale(13),
                      color: Color.Main,
                      fontFamily: 'Evogria',
                    }}>No comments</Text>
                  </View>
}
                </View>
              </View>
               



              <CustomButton
                onPress={() =>
                  navigation.navigate('bubbles', {
                    adjuster_id: adjusterId,
                  })
                }
         
                containerStyle={{
                  width: '86%',
                  alignSelf: 'center',
                  paddingVertical: moderateScale(12),
                  marginTop: verticalScale(15),
                }}
                textStyle={{
                  fontSize: scale(25),
                  // paddingVertical: moderateScale(15),
                }}
                title={'Leave Feedback'}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: Color.White,
  },
  linearGradient: {
    height: 200,
  },
  MainBox: {
    width: '90%',
    height: Dimensions.get('screen').height * 0.67,
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(95),
    borderRadius: 20,
    paddingVertical: verticalScale(20),
    zIndex: 100,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  ModalMainBox: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(20),
    borderRadius: 20,
    paddingTop: verticalScale(15),
  },
  Describe: {
    color: Color.Main,
    marginVertical: scale(5),
    fontSize: scale(25),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'gazrg-bold',
  },

  topContaintor: {
    color: Color.Main,
    // marginTop: scale(20),
    fontSize: scale(15),
    fontFamily: 'Helvetica',
  },
  Photo: {
    // width: 220,
    height: Dimensions.get('screen').height * 0.27,
    aspectRatio: 1 / 1,
    borderRadius: 200,
    alignSelf: 'center',
    marginTop: scale(-100),
    borderColor: Color.White,
    borderWidth: 2,
    resizeMode: 'cover',
  },
  companyLogo: {
    width: '50%',
    height: verticalScale(30),
    alignSelf: 'center',
    marginTop: verticalScale(12),
    resizeMode: 'contain',
  },
  name: {
    marginTop: scale(12),
    // marginLeft: scale(20),
    flex: 1,
    // backgroundColor: 'blue',
    marginHorizontal: scale(20)
  },
  Text_Name: {
    color: Color.Black,
    fontSize: scale(29),
    fontFamily: 'Evogria',
    marginLeft: scale(2),
  },
  number: {
    fontSize: scale(20),
    color: 'black',
  },
  rating: {
    fontSize: scale(15),
    color: 'black',
    fontFamily: 'Helvetica',
  },
  MarWOrd: {
    marginLeft: scale(60),
  },
  MarNum: {
    marginLeft: scale(40),
  },
  star: {
    marginTop: scale(5),
    marginLeft: scale(5),
  },

  bubbles: {
    color: Color.Black,
    textAlign: 'center',
    margin: scale(3),
    letterSpacing: 0.5,
    textTransform: 'capitalize',
    fontSize: 14,
    // paddingHorizontal : scale(5)
  },
  bubbleBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: scale(10),
    height : 100,
    marginLeft: 0,
    // backgroundColor: 'red',
    // paddingHorizontal : scale(5)
  },
  ModalBubbles: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: scale(12),
    borderRadius: 15,
    color: Color.Black,
    textAlign: 'center',
    margin: scale(3),
    textTransform: 'capitalize',
  },
  ModalBubbleBox: {
    marginTop: scale(2),
    paddingRight: moderateScale(5),
    paddingLeft: scale(5),
  },
  DisableBBl: {
    backgroundColor: Color.BackgroundColor,
    borderRadius: scale(15),
    padding: 3,
    margin: 5,
    marginLeft: 0,
    paddingHorizontal: scale(9.5),
    // width : '27%'
  },
});

export default Person;
