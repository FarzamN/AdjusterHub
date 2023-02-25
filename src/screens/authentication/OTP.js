import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Color} from '../../utils/Colors';

const CELL_COUNT = 4;
const OTP = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [time, setTime] = useState(40);
  const timerRef = useRef(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
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
            VERIFY CODE
          </Text>
          <Text style={styles.TextTwo}>Let's be secure!</Text>
        </View>
        <View style={styles.GreyBox}></View>

        <View style={styles.MainContainer}>
        <View
                  style={{
                    height: verticalScale(180),
                    width: '95%',
                    alignSelf: 'center',
                  }}>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={styles.logo}
          />
</View>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        
          <CustomButton
            onPress={() => navigation.navigate('login')}
            containerStyle={{marginTop: scale(30)}}
            title={'Verify'}
            textStyle={{
              fontSize: scale(25),
              paddingVertical: moderateScale(15),
            }}
          />
          <View style={styles.FPassCon}>
            <Text
              style={{
                fontSize: scale(14),
                color: Color.Black,
                fontFamily: 'Helvetica',
              }}>
              Wait {time} more seconds to
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: scale(14),
                  fontFamily: 'Helvetica',
                  color:Color.Main,
                  marginLeft: scale(5),
                }}>
                Resend.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {height: verticalScale(50), marginVertical: scale(15)},
  container: {
    flex: 1,
    backgroundColor: Color.Main,
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(25),
    marginTop: scale(15),
    textTransform: 'uppercase',
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    fontFamily: 'Helvetica',
    marginTop:-5
  },
  BlueBox: {
    backgroundColor: Color.Main,
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: '#DDDEDF',
    height: verticalScale(450),
  },
  MainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '18%',
    paddingHorizontal: 20,
    paddingVertical: scale(50),
    borderRadius: 20,
    height: Dimensions.get('screen').height * 0.65,
    elevation: 5,
    zIndex : 100,
    shadowColor : 'rgba(0,0,0)',
    shadowOffset : [1,1],
    shadowRadius : 5,
    shadowOpacity : 0.5
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewText: {
    color: Color.Main,
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
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  codeFieldRoot: {
    marginTop: scale(20),
   
  },
  cell: {
    width: scale(60),
    height: scale(60),
    fontSize: scale(24),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.Main,
    color: Color.Main,
    backgroundColor:Color.InputBackgroundTwo,
    textAlign: 'center',
    lineHeight: scale(56),
  },

  focusCell: {
    borderColor: Color.Main,
  },

});
export default OTP;
