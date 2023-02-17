import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
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
      <View styles={{height: '100%'}}>
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
          <Text style={[styles.TextOne, {fontFamily: 'gazrg-bold'}]}>
            VERIFY CODE
          </Text>
          <Text style={styles.TextTwo}>Let`s be secure!</Text>
        </View>
        <View style={styles.GreyBox}></View>

        <View style={styles.MainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require('../../assets/Images/logo.png')}
              style={styles.logo}
            />

            <CodeField
              ref={ref}
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
              containerStyle={{marginTop: scale(20)}}
              title={'Verify'}
              textStyle={{
                fontSize: scale(25),
                paddingVertical: moderateScale(10),
              }}
            />
            <View style={styles.FPassCon}>
              <Text
                style={{
                  fontSize: scale(14),
                  fontWeight: '500',
                  color: '#000',
                  fontStyle: 'normal',
                }}>
                Wait {time} more secounds to
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '500',
                    color: '#0568F2',
                    fontStyle: 'normal',
                    marginLeft: scale(5),
                  }}>
                  Resend.
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {height: verticalScale(50), marginVertical: scale(15)},
  container: {
    flex: 1,
    backgroundColor: '#0568F2',
  },
  TextOne: {
    color: '#fff',
    fontSize: scale(25),
    marginTop: scale(30),
    textTransform: 'uppercase',
  },
  TextTwo: {
    color: '#fff',
    fontSize: scale(17),
    marginTop: scale(-8),
  },
  BlueBox: {
    backgroundColor: '#0568F2',
    height: verticalScale(200),
    padding: moderateScale(20),
  },
  GreyBox: {
    backgroundColor: '#DDDEDF',
    height: '100%',
  },
  MainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '17%',
    paddingHorizontal: 20,
    paddingVertical: scale(35),
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 237,
    height: 180,
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
  codeFieldRoot: {marginTop: scale(20)},
  cell: {
    width: scale(65),
    height: scale(65),
    // lineHeight: 38,
    fontSize: scale(24),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Color.Main,
    textAlign: 'center',
    color: Color.Main,
    textAlignVertical: 'center',
  },
  focusCell: {
    borderColor: Color.Main,
  },
});
export default OTP;
