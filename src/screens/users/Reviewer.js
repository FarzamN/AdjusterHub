import React, {useState} from 'react';
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

const Person = ({navigation}) => {
  const [rating, setRating] = useState(0);
  const [isModalVisibleBubble, setModalVisibleBubble] = useState(false);
  const toggleModalBubble = () => {
    setModalVisibleBubble(true);
  };
  const height = Dimensions.get('screen').height;
  const [isModalVisibleLottie, setModalVisibleLottie] = useState(false);

  const toggleModalLottie = () => {
    setModalVisibleLottie(value2 => !value2);
  };

  const showData = () => {
    toggleModalBubble(false);
    setModalVisibleBubble(false);
    toggleModalLottie(true);
  };

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const params = [
    {
      id: '1',
      name: 'meticulous',
      selected: false,
    },
    {
      id: '2',
      name: 'relaxed',
      selected: false,
    },
    {
      id: '3',
      name: 'educated',
      selected: false,
    },
    {
      id: '4',
      name: 'friendly',
      selected: false,
    },
    {
      id: '5',
      name: 'lenient',
      selected: false,
    },
    {
      id: '6',
      name: 'educated',
      selected: false,
    },
    {
      id: '7',
      name: 'flexible',
      selected: false,
    },
    {
      id: '8',
      name: 'meticulous',
      selected: false,
    },
    {
      id: '9',
      name: 'talkative',
      selected: false,
    },
    {
      id: '10',
      name: 'relaxed',
      selected: false,
    },
    {
      id: '11',
      name: 'communicative',
      selected: false,
    },
    {
      id: '12',
      name: 'friendly',
      selected: false,
    },
    {
      id: '13',
      name: 'lenient',
      selected: false,
    },
    {
      id: '14',
      name: 'educated',
      selected: false,
    },
    {
      id: '15',
      name: 'on Time',
      selected: false,
    },
    {
      id: '16',
      name: 'flexible',
      selected: false,
    },
    {
      id: '17',
      name: 'meticulous',
      selected: false,
    },
    {
      id: '18',
      name: 'talkative',
      selected: false,
    },
    {
      id: '19',
      name: 'relaxed',
      selected: false,
    },
    {
      id: '20',
      name: 'communicative',
      selected: false,
    },
    {
      id: '21',
      name: 'friendly',
      selected: false,
    },
    {
      id: '22',
      name: 'lenient',
      selected: false,
    },
    {
      id: '23',
      name: 'educated',
      selected: false,
    },
    {
      id: '24',
      name: '    on Time',
      selected: false,
    },
    {
      id: '25',
      name: 'flexible',
      selected: false,
    },
    {
      id: '26',
      name: 'meticulous',
      selected: false,
    },
    {
      id: '27',
      name: 'friendly',
      selected: false,
    },
  ];

  const [data, setData] = useState(params);

  const handleChange = value => {
    const newitem = data.map(val => {
      if (val.id === value.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setData(newitem);
  };

  const renderItem = ({item}) => (
    <View style={styles.ModalBubbleBox}>
      <TouchableOpacity activeOpacity={0.3} onPress={() => handleChange(item)}>
        <Text
          style={[
            styles.ModalBubbles,
            {
              backgroundColor: item.selected
                ? Color.Main
                : Color.BackgroundColor,
              color: item.selected ? Color.White : Color.Black,
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <>
    <SafeAreaView style={styles.container}/>
      <SafeAreaView style={{flex: 1, backgroundColor :Color.BackgroundColor}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <BackAndLogo onPress={() => navigation.goBack()} />
        <View style={{height: verticalScale(200)}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#056DFE', '#045CD2', ]}
            style={{flex: 1}}></LinearGradient>
        </View>
 
        <View style={{position: 'absolute', top: '25%', width: '100%'}}>
          <View style={styles.MainBox}>
            <Image
              style={styles.Photo}
              source={require('../../assets/Images/oldman.jpg')}
            />
            <Image
              style={styles.companyLogo}
              source={require('../../assets/Images/four.png')}
            />
            <View style={styles.name}>
              <Text style={styles.Text_Name}>John Smith</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.number}>634</Text>
                <Text style={[styles.number, styles.MarWOrd]}>4.95</Text>
                <Entypo
                  style={styles.star}
                  name={'star'}
                  color={'black'}
                  size={20}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.rating}>Reviews</Text>
                <Text style={[styles.rating, styles.MarNum]}>Rating</Text>
              </View>
              <View>
              <Text style={styles.topContaintor}>Top Contractor Comments</Text>
              <View style={styles.bubbleBox}>
                <View
                style={styles.DisableBBl}>
                <Text style={styles.bubbles}>meticulous</Text>
                </View>
                <View
                 style={styles.DisableBBl}>
                <Text style={styles.bubbles}>talkative</Text>
                </View>
                <View
               style={styles.DisableBBl}>
                <Text style={styles.bubbles}>relaxed</Text>
                </View>
                <View
               style={styles.DisableBBl}>
                <Text style={styles.bubbles}>communicative</Text>
                </View>
                <View
            style={styles.DisableBBl}>
                <Text style={styles.bubbles}>friendly</Text>
                </View>
                <View
                style={styles.DisableBBl}>
                <Text style={styles.bubbles}>lenient</Text>
                </View>
                <View
                style={styles.DisableBBl}>
                <Text style={styles.bubbles}>educated</Text>
                </View>
                <View
                style={styles.DisableBBl}>
                <Text style={styles.bubbles}>on Time</Text>
                </View>
                <View
               style={styles.DisableBBl}>
                <Text style={styles.bubbles}>flexible</Text>
                </View>
                </View>
              </View>
            </View>
            <CustomButton
              onPress={() => navigation.navigate('bubbles')}
              containerStyle={{
                width: '80%',
                alignSelf: 'center',
                paddingVertical: moderateScale(10),
                marginTop:verticalScale(15)
              }}
              title={'Leave Feedback'}
            />

            <Modal
              onBackdropPress={() => setModalVisibleLottie(false)}
              testID={'modal'}
              isVisible={isModalVisibleLottie}>
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
                    FeedBack Added
                  </Text>
                  <Text style={{color: Color.Main, fontSize: scale(15)}}>
                    Thanks for your FeedBack
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
                      color: Color.Main,
                    },
                  ]}
                  autoPlay
                  loop
                />
              </View>
            </Modal>
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
    backgroundColor: Color.White
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
    zIndex : 100,
    shadowColor : 'rgba(0,0,0)',
    shadowOffset : [1,1],
    shadowRadius : 5,
    shadowOpacity : 0.4
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
    marginTop: scale(20),
    fontSize: scale(15),
    fontFamily:'Helvetica'
  },
  Photo: {
    // width: 220,
    height: Dimensions.get('screen').height * 0.27,
    aspectRatio:1/1,
    borderRadius: 200,
    alignSelf: 'center',
    marginTop: scale(-100),
    borderColor: Color.White,
    borderWidth: 2,
    resizeMode : 'cover'
    
  },
  companyLogo: {
    width: '50%',
    height: verticalScale(30),
    alignSelf: 'center',
    marginTop: verticalScale(7),
    resizeMode :'contain'
  },
  name: {
    marginLeft: scale(20),
  },
  Text_Name: {
    color: Color.Black,
    fontSize: scale(35),
    fontFamily: 'Evogria',
  },
  number: {
    fontSize: scale(23),
    color: 'black',
  },
  rating: {
    fontSize: scale(15),
    color: 'black',
   fontFamily:'Helvetica'
  },
  MarWOrd: {
    marginLeft: scale(70),
  },
  MarNum: {
    marginLeft: scale(60),
  },
  star: {
    marginTop: scale(5),
    marginLeft: scale(5),
  },

  bubbles: {
    color: Color.Black,
    textAlign: 'center',
    margin: scale(3),
    letterSpacing : 0.5,
    textTransform: 'capitalize',
    fontSize : 14
  },
  bubbleBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: scale(10),
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
  DisableBBl:{
    backgroundColor: Color.BackgroundColor,
    borderRadius : scale(15),
    padding:3,
    margin : 5,
    
  }
});

export default Person;
