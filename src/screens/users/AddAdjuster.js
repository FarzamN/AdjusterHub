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

const AddAdjuster = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'all' });
    return (
        <SafeAreaView style={styles.container}>
            <View styles={{ height: '100%' }}>
                <View style={styles.BlueBox}>
                    <Text style={styles.TextOne}>Add adjuster</Text>
                    <Text style={styles.TextTwo}>Don`t see your adjuster? Add them!</Text>
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
                                    marginTop: scale(10),
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
                                    marginTop: scale(10),
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
                            placeholder={'Insurance Company'}
                            keyboardType={'default'}
                            restyle={{
                                backgroundColor: Color.InputBackground,
                                color: '#000',
                            }}
                        />
                        {errors.FirstName && <Validation title={errors.email.message} />}


                        <TouchableOpacity style={styles.Add}>
                            <Text style={styles.Add_Text}>Add Image/business Card</Text>
                            <FontAwesome name={'photo'} size={20} color={Color.White} />
                        </TouchableOpacity>
                        <CustomButton title={'CReAtE ADJUStER'} textStyle={{ fontSize: scale(20), fontWeight: '700' }} />

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: { height: 50, marginVertical: 15, },
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
});
export default AddAdjuster;
