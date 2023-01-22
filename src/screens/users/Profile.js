import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

import BackWithMenu from '../../components/BackWithMenu'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Color } from '../../utils/Colors'
import Validation from '../../components/Validation';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
const Profile = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'all' });
    return (
        <SafeAreaView>
            <BackWithMenu />
            <View style={styles.BlueBox}>
                <Image style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} source={require('../../assets/Images/man.jpg')} />
                <TouchableOpacity style={styles.editBox}>
                    <FontAwesome name={'pencil'} size={22} color={Color.Black} />
                </TouchableOpacity>
            </View>
            <View style={styles.GreyBox}></View>
            <View style={styles.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>

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
                            backgroundColor: '#F4F5F5',
                            color: '#000',
                        }}
                    />
                    <CustomInput
                        name="last Name"
                        rules={{
                            required: 'Last Name is required',
                        }}
                        control={control}
                        style={styles.textInput}
                        textStyle={styles.InputTextStyle}
                        placeholder={'last Name'}
                        keyboardType={'default'}
                        restyle={{
                            backgroundColor: '#F4F5F5',
                            color: '#000',
                        }}
                    />
                    <CustomInput
                        name="Company"
                        rules={{
                            required: 'Company is required',
                        }}
                        control={control}
                        style={styles.textInput}
                        textStyle={styles.InputTextStyle}
                        placeholder={'Company'}
                        keyboardType={'default'}
                        restyle={{
                            backgroundColor: '#F4F5F5',
                            color: '#000',
                        }}
                    />
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
                            marginTop: 0,
                            backgroundColor: '#F4F5F5',
                            color: '#000',
                            margin: 0
                        }}
                    />
                    {errors.email && <Validation title={errors.email.message} />}


                    <CustomButton title={'save changes'} containerStyle={{ marginTop: scale(30) }} textStyle={{ fontSize: scale(23) }} />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textInput: { height: verticalScale(50), marginVertical: scale(15), },
    BlueBox: {
        height: '35%',
    },
    GreyBox: {
        backgroundColor: '#DDDEDF',
        height: '65%',
    },
    editBox: {
        width: scale(35),
        height: scale(35),
        borderRadius: 100,
        backgroundColor: Color.White,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 55,
        right: 10,


    },
    MainContainer: {
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        top: '40%',
        paddingHorizontal: 20,
        paddingVertical: scale(20),
        borderRadius: 20
    },
})

export default Profile
