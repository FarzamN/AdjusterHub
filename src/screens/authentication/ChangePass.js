import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Color} from '../../utils/Colors';

const ChangePass = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [password2, setPassword2] = useState('');
  const [isPasswordSecure2, setIsPasswordSecure2] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor : '#ffffff'
      }} >
      <ScrollView styles={{flex: 1,}} showsVerticalScrollIndicator={false}>
        <View style={styles.BlueBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
            style={styles.arrow}>
            <FontAwesome
              style={styles.FontAwesomeArrow}
              name={'angle-left'}
              size={35}
              color={Color.Main}
            />
          </TouchableOpacity>
          <Text style={[styles.TextOne, {fontFamily: 'Evogria'}]}>
            CREATE NEW PASSWORD
          </Text>
          <Text style={styles.TextTwo}>Make it unique!</Text>
        </View>
        <View style={styles.GreyBox}></View>

        <View style={styles.MainContainer}>
          <View
            style={{
              height: verticalScale(180),
                width: "95%",
                alignSelf: 'center',
            }}>
            <Image
              source={require('../../assets/Images/logo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <CustomInput
              secureTextEntry={isPasswordSecure}
              textContentType={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
              name="Password"
              rules={{
                required: 'Password is required',
              }}
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'Password'}
              keyboardType={'default'}
              restyle={{
                backgroundColor: '#F4F5F5',
                color: '#000',
              }}
              PIname2={'locked'}
              PIsize2={18}
              PIcolor2={'#999B9E'}
              PIstylye2={{
                position: 'absolute',
                bottom: scale(34),
                left: scale(12),
              }}
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: scale(15),
                bottom: scale(10),

                // justifyContent: 'flex-end',
              }}
              onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
              <Text style={styles.viewText}>
                {isPasswordSecure ? 'SHOW' : 'HIDE'}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <CustomInput
              secureTextEntry={isPasswordSecure}
              textContentType={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
              name="c_password"
              rules={{
                required: 'Password is required',
              }}
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'Confirm Password'}
              keyboardType={'default'}
              restyle={{
                backgroundColor: '#F4F5F5',
                color: '#000',
              }}
              PIname2={'locked'}
              PIsize2={18}
              PIcolor2={'#999B9E'}
              PIstylye2={{
                position: 'absolute',
                bottom: scale(34),
                left: scale(12),
              }}
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: scale(15),
                bottom: scale(10),
              }}
              onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
              <Text style={styles.viewText}>
                {isPasswordSecure ? 'SHOW' : 'HIDE'}
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            onPress={() => navigation.navigate('login')}
            containerStyle={{
              marginTop: scale(55),
              paddingVertical: moderateScale(15),
            }}
            title={'Confirm'}
            textStyle={{fontSize: scale(24)}}
          />
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: verticalScale(45),
    marginVertical: scale(8),
  },
  container: {
    flex: 1,
    backgroundColor:  Color.Main,
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(23),
    marginTop: scale(20),
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(15),
    fontFamily: 'Helvetica',
    marginTop:-5
  },
  BlueBox: {
    backgroundColor: Color.Main,
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    height: verticalScale(500),
  },
  MainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    height: Dimensions.get('screen').height * 0.7,
    alignSelf: 'center',
    position: 'absolute',
    top: '17%',
    paddingHorizontal: 20,
    paddingTop: scale(35),
    borderRadius: 20,
    zIndex : 100,
    shadowColor : 'rgba(0,0,0)',
    shadowOffset : [1,1],
    shadowRadius : 5,
    shadowOpacity : 0.4
    // paddingBottom: scale(3),
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewText: {
    color: '#0568F2',
    fontSize: scale(15),
    fontWeight: '600',
  },
  FPassCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: scale(5),
  },
  arrow: {
    backgroundColor: Color.White,
    width: scale(32),
    height: scale(32),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FontAwesomeArrow: {
    marginRight: 3,
    marginTop: -2,
    // backgroundColor: 'red'
    alignSelf: 'center',
  },
});
export default ChangePass;
