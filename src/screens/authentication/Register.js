import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Validation from '../../components/Validation';
import CustomInput from '../../components/CustomInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { Color } from '../../utils/Colors';

const Register = () => {
    const [password, setPassword] = useState('');
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'all' });
    return (
        <SafeAreaView style={styles.container}>
            <View styles={{ height: '100%' }}>
                <View style={styles.BlueBox}>
                    <Text style={styles.TextOne}>Register</Text>
                    <Text style={styles.TextTwo}>Welcome!</Text>
                </View>
                <View style={styles.GreyBox}></View>

                <View style={styles.MainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image
                            source={require('../../assets/Images/logo.png')}
                            style={styles.logo}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CustomInput
                                name="First Name"
                                rules={{
                                    required: 'First Name is required',
                                }}
                                control={control}
                                style={styles.textInput}
                                textStyle={styles.InputTextStyle}
                                placeholder={'First Name'}
                                keyboardType={'default'}
                                restyle={{

                                    backgroundColor: Color.InputBackground,
                                    color: '#000',
                                    paddingHorizontal: moderateScale(40)
                                }}
                            />
                            <CustomInput
                                name="Last Name"
                                rules={{
                                    required: 'Last Name is required',
                                }}
                                control={control}
                                style={styles.textInput}
                                textStyle={styles.InputTextStyle}
                                placeholder={'Last Name'}
                                keyboardType={'default'}
                                restyle={{
                                    backgroundColor: Color.InputBackground,
                                    color: '#000',
                                    paddingHorizontal: moderateScale(40)
                                }}
                            />
                        </View>



                        <CustomInput
                            name="Email"
                            rules={{
                                required: 'Email is required',
                            }}
                            control={control}
                            style={styles.textInput}
                            textStyle={styles.InputTextStyle}
                            placeholder={'Email@gmail.com'}
                            keyboardType={'default'}
                            restyle={{
                                backgroundColor: '#F4F5F5',
                                color: '#000',
                            }}
                            PIname={'email'}
                            PIsize={20}
                            PIcolor={'#999B9E'}
                            PIstylye={{
                                position: 'absolute',
                                bottom: scale(18),
                                left: scale(12),
                            }}
                        />
                        {errors.email && <Validation title={errors.email.message} />}
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
                                    top: scale(50),

                                }}
                                onPress={() => setIsPasswordSecure(prevCheck => !prevCheck)}>
                                <Text style={styles.viewText}>
                                    {isPasswordSecure ? 'SHOW' : 'HIDE'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <CustomButton title={'register'} textStyle={{ fontSize: scale(20), fontWeight: '700' }} containerStyle={{ marginTop: scale(20), height: verticalScale(50) }} />
                        <View style={styles.FPassCon}>
                            <Text
                                style={{
                                    fontSize: scale(14),
                                    fontWeight: '500',
                                    color: '#000',
                                    fontStyle: 'normal',
                                }}>
                                By taping 'Register' you will accept our
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
                                    Terms of Service
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
    textInput: { height: verticalScale(50), marginVertical: scale(5) },
    container: {
        flex: 1,
    },
    TextOne: {
        color: '#fff',
        fontWeight: '800',
        fontSize: scale(25),
        marginTop: scale(30),
        textTransform: 'uppercase'
    },
    TextTwo: {
        color: '#fff',
        fontSize: scale(17),

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
    MainContainer: {
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        top: '15%',
        paddingHorizontal: 20,
        paddingVertical: scale(20),
        borderRadius: 20
    },
    logo: {
        alignSelf: 'center',
        width: 250,
        height: 180,
    },
    Add: {
        backgroundColor: '#545456',
        width: '85%',
        height: verticalScale(45),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: scale(20)
    },
    Add_Text: {
        color: Color.White
    },
    viewText: {
        color: '#0568F2',
        fontSize: scale(15),
        fontWeight: '600',
    },
    FPassCon: {
        right: 0,
        marginTop: scale(5),
    },
});
export default Register;
