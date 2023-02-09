import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';

const TermsAndCondition = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.firstView}>
        <Image
          style={{
            alignSelf: 'center',
            marginTop: scale(20),
            width: 200,
            height: 150,
          }}
          source={require('../../assets/Images/logo.png')}
        />
        <Text style={styles.accept}>Terms and Condition</Text>
        <Text style={styles.lorem}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <CustomButton
          onPress={() => navigation.goBack()}
          title="Accept and Continue"
          textStyle={{textAlign: 'center', fontWeight: 'bold'}}
          containerStyle={{
            marginTop: scale(20),
            width: '90%',
            alignSelf: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.Main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accept: {
    textAlign: 'center',
    marginTop: scale(15),
    fontSize: scale(22),
    color: '#353535',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    // textDecorationColor: Color.Main,
  },

  lorem: {
    textAlign: 'center',
    marginLeft: scale(30),
    marginRight: scale(30),
    marginTop: scale(10),
    color: Color.greyfont,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: scale(13),
  },

  firstView: {
    width: '85%',
    height: '85%',
    backgroundColor: Color.White,
    borderRadius: 35,
  },
});
