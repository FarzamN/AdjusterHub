import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
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
import StarRating from 'react-native-star-rating';
import {useForm} from 'react-hook-form';
import NewCustomInput from '../../components/NewCustomInput';

const Person = ({navigation}) => {
  const [rating, setRating] = useState(0);
  const [isModalVisibleBubble, setModalVisibleBubble] = useState(false);
  const toggleModalBubble = () => {
    setModalVisibleBubble(!isModalVisibleBubble);
  };

  const [isModalVisibleLottie, setModalVisibleLottie] = useState(false);
  const toggleModalLottie = () => {
    setModalVisibleLottie(!isModalVisibleLottie);
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
      name: 'communicative',
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
    <SafeAreaView style={styles.container}>
      <BackAndLogo onPress={() => navigation.goBack()} />
      <View style={{height: '30%'}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#056DFE', '#045CD2', '#056DFE', '#045CD2']}
          style={{flex: 1}}></LinearGradient>
      </View>
      <View
        style={{height: '70%', backgroundColor: Color.BackgroundColor}}></View>
      <View style={{position: 'absolute', top: 100, width: '100%'}}>
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
              <Text style={[styles.number, styles.MarWOrd]}>{rating}</Text>
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
            <Text style={styles.topContaintor}>Top Containtor Comments</Text>
            <View style={styles.bubbleBox}>
              <Text style={styles.bubbles}>meticulous</Text>
              <Text style={styles.bubbles}>talkative</Text>
              <Text style={styles.bubbles}>relaxed</Text>
              <Text style={styles.bubbles}>communicative</Text>
              <Text style={styles.bubbles}>friendly</Text>
              <Text style={styles.bubbles}>lenient</Text>
              <Text style={styles.bubbles}>educated</Text>
              <Text style={styles.bubbles}>on Time</Text>
              <Text style={styles.bubbles}>flexible</Text>
            </View>
          </View>
          <CustomButton
            onPress={toggleModalBubble}
            containerStyle={{width: '80%', alignSelf: 'center'}}
            title={'Leave Feedback'}
          />
          <Modal
            onBackdropPress={() => setModalVisibleBubble(false)}
            isVisible={isModalVisibleBubble}>
            <View style={styles.ModalMainBox}>
              <Text style={styles.Describe}>Describe our adjscter</Text>
              <View>
                <FlatList
                  numColumns={3}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={renderItem}
                />
              </View>
              <View
                style={{
                  width: '50%',
                  alignSelf: 'center',
                  marginTop: scale(10),
                }}>
                <StarRating
                  halfStarEnabled={true}
                  fullStarColor={Color.Main}
                  starSize={30}
                  disabled={false}
                  maxStars={5}
                  rating={rating}
                  selectedStar={setRating}
                />
              </View>
              <NewCustomInput
                name="clame"
                control={control}
                style={styles.textInput}
                textStyle={styles.InputTextStyle}
                placeholder={'Clame#'}
                keyboardType={'default'}
                restyle={{
                  width: '80%',
                  alignSelf: 'center',
                  backgroundColor: '#F4F5F5',
                  color: '#000',
                }}
              />
              <CustomButton
                onPress={() => {
                  toggleModalLottie();
                  toggleModalBubble();
                }}
                title={'Submit'}
                containerStyle={{
                  width: '80%',
                  alignSelf: 'center',
                  marginTop: scale(30),
                  height: verticalScale(50),
                }}
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
                        fontWeight: '600',
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
                        color: '#E94057',
                      },
                    ]}
                    autoPlay
                    loop
                  />
                </View>
              </Modal>
              <View style={{height: 20}}></View>
              {/* </ScrollView> */}
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#045CD2'
  },
  linearGradient: {
    height: 200,
  },
  MainBox: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(95),
    borderRadius: 20,
    paddingVertical: verticalScale(20),
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
    fontSize: scale(22),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
  },

  topContaintor: {
    color: Color.Main,
    marginTop: scale(5),
    fontSize: scale(15),
  },
  Photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: scale(-100),
    borderColor: Color.Black,
    borderWidth: 2,
  },
  companyLogo: {
    width: scale(200),
    height: verticalScale(40),
    alignSelf: 'center',
    marginVertical: scale(10),
  },
  name: {
    marginLeft: scale(20),
  },
  Text_Name: {
    color: Color.Black,
    fontSize: scale(30),
    fontWeight: '600',
  },
  number: {
    fontSize: scale(23),
    color: 'black',
  },
  rating: {
    fontSize: scale(15),
    color: 'black',
  },
  MarWOrd: {
    marginLeft: scale(40),
  },
  MarNum: {
    marginLeft: scale(20),
  },
  star: {
    marginTop: scale(5),
    marginLeft: scale(5),
  },

  bubbles: {
    backgroundColor: Color.BackgroundColor,
    paddingVertical: moderateScale(7),
    paddingHorizontal: scale(13),
    borderRadius: 25,
    color: Color.Black,
    textAlign: 'center',
    margin: scale(3),
    textTransform: 'capitalize',
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: scale(2),
    marginLeft: scale(7),
  },
});

export default Person;
