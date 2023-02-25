import React, {useState} from 'react';
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
const Bubbles = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [rating, setRating] = useState(0);
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
      name: 'friendly',
      selected: false,
    },
    {
      id: '4',
      name: 'educated',
      selected: false,
    },
    {
      id: '5',
      name: 'lenient',
      selected: false,
    },
    {
      id: '6',
      name: 'communicative',
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
    <View style={styles.bubbleBox}>
      <TouchableOpacity 
      style={{
        backgroundColor: item.selected ? '#2B83FE' : '#E4E5E6',
        borderRadius : scale(15),
        margin:2
      }}
      activeOpacity={0.9} onPress={() => handleChange(item)}>
        <Text
          style={[
            styles.bubbles,
            {
              fontSize : 14,
              letterSpacing : 0.1,
              color: item.selected ? Color.White : Color.Black,
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView styles={styles.container}>
      <StatusBar  barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackAndLogo onPress={() => navigation.goBack()} />
        <View style={{height: verticalScale(200)}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#056DFE', '#045CD2', '#056DFE', '#045CD2']}
            style={{flex: 1}}></LinearGradient>
        </View>
        <View
          style={{
            height: verticalScale(400),
            backgroundColor: Color.BackgroundColor,
          }}></View>
        <View style={{position: 'absolute', top: 90, width: '100%'}}>
          <View style={styles.MainBox}>
            {/* <ScrollView> */}
            <Text style={styles.Describe}>Describe Your adjuster</Text>
            <View>
              <FlatList
                numColumns={3}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />
            </View>
            <View
              style={{width: '50%', alignSelf: 'center', marginTop: scale(10)}}>
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
              name="Claim"
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'Claim#'}
              keyboardType={'default'}
              restyle={{
                width: '90%',
                alignSelf: 'center',
                backgroundColor: '#F4F5F5',
                color: '#000',
                borderRadius: 5,
                paddingHorizontal:moderateScale(40),
                height:verticalScale(45)
              }}
            />
            <CustomButton
              onPress={() => {
                // navigation.navigate('reviewer');
                toggleModal();
              }}
              title={'Submit'}
              containerStyle={{
                width: '90%',
                alignSelf: 'center',
                marginTop: scale(20),
                paddingVertical: verticalScale(12)
              }}
            />
            <Modal
              onBackdropPress={() => navigation.navigate('reviewer')}
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
                      fontFamily:'Evogria'
                    }}>
                    FeedBack Added
                  </Text>
                  <Text style={{color: Color.Main, fontSize: scale(14),
                      fontFamily:'Helvetica'
                  }}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(50),
  },
  container: {
    flex: 1,
    backgroundColor: Color.BackgroundColor,
  },
  MainBox: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(15),
    borderRadius: 20,
    paddingTop: verticalScale(10),
    paddingHorizontal :5,
    height: Dimensions.get('screen').height * 0.77,
    zIndex : 100,
    shadowColor : 'rgba(0,0,0)',
    shadowOffset : [1,1],
    shadowRadius : 5,
    shadowOpacity : 0.4
  },
  Describe: {
    color: Color.Main,
    marginVertical: verticalScale(10),
    fontSize: scale(25),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },
  bubbles: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: scale(12),
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
    marginLeft: scale(7),
    
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
});

export default Bubbles;
