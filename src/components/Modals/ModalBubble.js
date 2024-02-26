import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import {useForm} from 'react-hook-form';
import {Color} from '../../utils/Colors';
import CustomButtton from '../CustomButton';
import NewCustomInput from '../NewCustomInput';

const ModalBubble = props => {
  const [rating, setRating] = useState(0);
  const [isModalVisibleBubble, setModalVisibleBubble] = useState(false);
  const toggleModalBubble = () => {
    setModalVisibleBubble(true);
  };
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const [isModalVisibleLottie, setModalVisibleLottie] = useState(false);

  const toggleModalLottie = () => {
    setModalVisibleLottie(value2 => !value2);
  };

  const showData = () => {
    toggleModalBubble(false);
    setModalVisibleBubble(false);
    toggleModalLottie(true);
  };
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
    <Modal onBackdropPress={props.onBackdropPress} isVisible={props.isVisible}>
      <View style={styles.ModalMainBox}>
        <Text style={styles.Describe}>Describe your adjuster</Text>
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
        <CustomButtton
          onPress={props.onPress}
          title={'Submit'}
          containerStyle={{
            width: '80%',
            alignSelf: 'center',
            marginTop: scale(30),
            height: verticalScale(50),
          }}
        />

        <View style={{height: 20}}></View>
        {/* </ScrollView> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045CD2',
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
    fontSize: scale(25),
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'gazrg-bold',
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
    width: '70%',
    height: verticalScale(29),
    alignSelf: 'center',
    marginVertical: scale(10),
  },
  name: {
    marginLeft: scale(20),
  },
  Text_Name: {
    color: Color.Black,
    fontSize: scale(35),
    fontFamily: 'gazrg-bold',
  },
  number: {
    fontSize: scale(23),
    color: 'black',
  },
  rating: {
    fontSize: scale(15),
    color: 'black',
    fontFamily: 'Gaz-W00-Regular',
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
    ...Platform.select({
      ios: {
        borderRadius: 25,
      },
      android: {
        borderRadius: 25,
      },
      default: {
        // other platforms, web for example
        borderRadius: 25,
      },
    }),

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
    marginTop: scale(2),
    paddingRight: moderateScale(5),
    paddingLeft: scale(5),
  },
});
export default ModalBubble;
