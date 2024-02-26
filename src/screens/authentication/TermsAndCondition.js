import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import RenderHTML from 'react-native-render-html';

const TermsAndCondition = ({navigation}) => {
const termsNConditions =  useSelector(state =>  state.terms_n_conditions)

  return (
    <>
    <SafeAreaView style={styles.Container}/>
    <SafeAreaView style={{flex:1, backgroundColor : "#034EAC"}}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#056BF9', '#056DFE', '#034EAC']}
        style={styles.mainView}>
        <View style={styles.firstView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                height: verticalScale(150),
                width: scale(200),
                alignSelf: 'center',
                marginTop: scale(30),
              }}>
              <Image
                source={require('../../assets/Images/logo.png')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.accept}>Terms and Condition</Text>
  <View style={{padding : scale(20)}}>
            <RenderHTML
            
          contentWidth={Dimensions.get("screen").width}
      source={
       { html : termsNConditions}}
    />

  </View>
            {/* <Text style={styles.lorem}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. A Terms and Conditions agreement acts as a legal
              contract between you (the company) and the user. It's where you
              maintain your rights to exclude users from your app in the event
              that they abuse your website/app, set out the rules for using your
              service and note other important details and disclaimers. Your
              Terms and Conditions agreement will be uniquely yours. While some
              clauses are standard and commonly seen in pretty much every Terms
              and Conditions agreement, it's up to you to set the rules and
              guidelines that the user must agree to. Terms and Conditions
              agreements are also known as Terms of Service or Terms of Use
              agreements. These terms are interchangeable, practically speaking.
              You can use this agreement anywhere, regardless of what platform
              your business operates on: Websites WordPress blogs or blogs on
              any kind of platform: Joomla!, Drupal etc. Ecommerce stores Mobile
              apps Facebook apps Desktop apps SaaS apps Desktop apps usually
              have an EULA (End-User License Agreement) instead of a Terms and
              Conditions agreement, but your business can use both. Mobile apps
              are increasingly using Terms and Conditions along with an EULA if
              the mobile app has an online service component, i.e. it connects
              with a server.
              termsNConditions
            </Text> */}
            <CustomButton
              onPress={() => navigation.navigate('register')}
              title="Accept and Continue"
              textStyle={{textAlign: 'center', fontSize : 20}}
              containerStyle={{
                width: '85%',
                alignSelf: 'center',
                marginBottom: scale(20),
                padding: moderateScale(15),
              }}
            />
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
    </>
    
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({
  Container: {
    flex: 0,
    backgroundColor : '#056BF9'
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accept: {
    textAlign: 'center',
    marginTop: scale(15),
    fontSize: scale(22),
    color: '#353535',
    fontFamily: 'Evogria',
  },

  lorem: {
    textAlign: 'center',
    marginHorizontal: scale(20),
    marginTop: scale(10),
    color: Color.greyfont,
    fontSize: scale(12),
    fontFamily: 'Helvetica',
  },

  firstView: {
    width: '90%',
    height: '90%',
    backgroundColor: Color.White,
    borderRadius: 30,
  },
});
