import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BackAndLogo from '../../components/BackAndLogo';
import {Color} from '../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import NewCustomInput from '../../components/NewCustomInput';
const Bubbles = ({navigation}) => {
  const [showAnime, setShowAnime] = useState(false);
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
    <View style={styles.bubbleBox}>
      <TouchableOpacity activeOpacity={0.3} onPress={() => handleChange(item)}>
        <Text
          style={[
            styles.bubbles,
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
    <SafeAreaView styles={styles.container}>
      <BackAndLogo onPress={() => navigation.goBack()} />
      <View styles={{height: '100%'}}>
        <View style={styles.BlueBox}>
          <Text style={styles.TextOne}>Add adjuster</Text>
          <Text style={styles.TextTwo}>Don`t see your adjuster? Add them!</Text>
        </View>
        <View style={styles.GreyBox}></View>
        <View style={{position: 'absolute', top: 100, width: '100%'}}>
          <View style={styles.MainBox}>
            {/* <ScrollView> */}
            <Text style={styles.topContaintor}>Describe our adjecter</Text>
            <View>
              <FlatList
                numColumns={3}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />
            </View>
            <Image
              style={styles.Image}
              source={require('../../assets/Images/stars.png')}
            />
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
                // navigation.navigate('person');
                setShowAnime(!showAnime);
              }}
              title={'Submit'}
              containerStyle={{
                width: '80%',
                alignSelf: 'center',
                marginTop: scale(30),
                height: verticalScale(50),
              }}
            />
            {showAnime && (
              <View
                style={{
                  backgroundColor: '#fff',
                  position: 'absolute',
                  top: -50,
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
            )}
            <View style={{height: 20}}></View>
            {/* </ScrollView> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(50),
  },
  container: {
    flex: 1,
    backgroundColor: '##fff',
  },
  MainBox: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(20),
    borderRadius: 20,
    paddingVertical: verticalScale(20),
  },
  topContaintor: {
    color: Color.Main,
    marginVertical: scale(5),
    fontSize: scale(22),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
  },
  bubbles: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: scale(12),
    borderRadius: 15,
    color: Color.Black,
    textAlign: 'center',
    margin: scale(3),
    textTransform: 'capitalize',
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
  Image: {
    alignSelf: 'center',
    marginTop: scale(10),
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
});

export default Bubbles;
