import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackAndLogo from '../../components/BackAndLogo';
import {Color} from '../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/CustomButton';
const Person = ({navigation}) => {
  return (
    <SafeAreaView styles={styles.container}>
      <BackAndLogo onPress={() => navigation.goBack()} />
      <View style={{height: '30%', backgroundColor: Color.Main}}></View>
      <View
        style={{height: '70%', backgroundColor: Color.BackgroundColor}}></View>
      <View style={{position: 'absolute', top: 100, width: '100%'}}>
        <View style={styles.MainBox}>
          <Image
            style={styles.Photo}
            source={require('../../assets/Images/photo.jpg')}
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
            onPress={() => navigation.navigate('bubbles')}
            containerStyle={{width: '80%', alignSelf: 'center'}}
            title={'Leave Feedback'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1',
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
  Photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: scale(-100),
    borderColor: Color.White,
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
    marginLeft: scale(35),
  },
  MarNum: {
    marginLeft: scale(20),
  },
  star: {
    marginTop: scale(5),
    marginLeft: scale(5),
  },
  topContaintor: {
    color: Color.Main,
    marginTop: scale(5),
    fontSize: scale(15),
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
});

export default Person;
