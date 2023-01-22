import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import BackAndLogo from '../../components/BackAndLogo'
import { Color } from '../../utils/Colors'
import { verticalScale, scale, moderateScale, } from 'react-native-size-matters'

import Validation from '../../components/Validation';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput'
const Bubbles = () => {
    const [BackChange, setBackChange] = useState(false);
    const [BackChange2, setBackChange2] = useState(false);
    const [BackChange3, setBackChange3] = useState(false);
    const [BackChange4, setBackChange4] = useState(false);
    const [BackChange5, setBackChange5] = useState(false);
    const [BackChange6, setBackChange6] = useState(false);
    const [BackChange7, setBackChange7] = useState(false);
    const [BackChange8, setBackChange8] = useState(false);
    const [BackChange9, setBackChange9] = useState(false);
    const [BackChange10, setBackChange10] = useState(false);
    const [BackChange11, setBackChange11] = useState(false);
    const [BackChange12, setBackChange12] = useState(false);
    const [BackChange13, setBackChange13] = useState(false)
    const [BackChange14, setBackChange14] = useState(false);
    const [BackChange15, setBackChange15] = useState(false);
    const [BackChange16, setBackChange16] = useState(false);
    const [BackChange17, setBackChange17] = useState(false);
    const [BackChange18, setBackChange18] = useState(false);
    const [BackChange19, setBackChange19] = useState(false);
    const [BackChange20, setBackChange20] = useState(false);
    const [BackChange21, setBackChange21] = useState(false);
    const [BackChange22, setBackChange22] = useState(false);
    const [BackChange23, setBackChange23] = useState(false);
    const [BackChange24, setBackChange24] = useState(false);
    const [BackChange25, setBackChange25] = useState(false);
    const [BackChange26, setBackChange26] = useState(false);
    const [BackChange27, setBackChange27] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'all' });
    return (
        <SafeAreaView styles={styles.container}>
            <BackAndLogo />
            <View style={{ height: '30%', backgroundColor: Color.Main }}>
            </View>
            <View style={{ height: '70%', backgroundColor: Color.BackgroundColor }}>
            </View>
            <View style={{ position: 'absolute', top: 100, width: '100%' }}>
                <ScrollView>
                    <View style={styles.MainBox}>

                        <Text style={styles.topContaintor}>
                            Describe our adjecter
                        </Text>
                        <View style={styles.bubbleBox}>
                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange(!BackChange)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange ? Color.Main : Color.BackgroundColor,
                                            color: BackChange ? Color.White : Color.Black,
                                        },
                                    ]}
                                >meticulous</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange2(!BackChange2)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange2 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange2 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >talkative</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange3(!BackChange3)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange3 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange3 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >relaxed</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange4(!BackChange4)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange4 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange4 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >communicative</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange5(!BackChange5)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange5 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange5 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >friendly</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange6(!BackChange6)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange6 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange6 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >lenient</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange7(!BackChange7)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange7 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange7 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >educated</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange8(!BackChange8)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange8 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange8 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >on Time</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange9(!BackChange9)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange9 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange9 ? Color.White : Color.Black,
                                        },
                                    ]}
                                >flexible</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange10(!BackChange10)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange10 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange10 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    meticulous
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange11(!BackChange11)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange11 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange11 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    talkative
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange12(!BackChange12)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange12 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange12 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    relaxed
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange13(!BackChange13)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange13 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange13 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    communicative
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange14(!BackChange14)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange14 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange14 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    friendly
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange15(!BackChange15)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange15 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange15 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    lenient
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange16(!BackChange16)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange16 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange16 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    educated
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange17(!BackChange17)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange17 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange17 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    on Time
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange18(!BackChange18)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange18 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange18 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    flexible
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange19(!BackChange19)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange19 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange19 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    meticulous
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange20(!BackChange20)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange20 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange20 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    talkative
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange21(!BackChange21)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange21 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange21 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    relaxed
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange22(!BackChange22)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange22 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange22 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    communicative
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange23(!BackChange23)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange23 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange23 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    friendly
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange24(!BackChange24)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange24 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange24 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    lenient
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange25(!BackChange25)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange25 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange25 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    educated
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange26(!BackChange26)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange26 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange26 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    on Time
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.3}
                                onPress={() => setBackChange27(!BackChange27)}>
                                <Text
                                    style={[
                                        styles.bubbles,
                                        {
                                            backgroundColor: BackChange27 ? Color.Main : Color.BackgroundColor,
                                            color: BackChange27 ? Color.White : Color.Black,
                                        },
                                    ]}>
                                    flexible
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.Image} source={require('../../assets/Images/stars.png')} />
                        {/* <TextInput style={styles.inputText} placeholder='Clame#' placeholderTextColor={Color.placeholderTextColor} /> */}
                        <CustomInput
                            name="Email"
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
                        {errors.FirstName && <Validation title={errors.email.message} />}
                        <CustomButton title={'Leave Feedback'} containerStyle={{ marginTop: scale(30), height: verticalScale(50), }} />
                    </View>
                    <View style={{ height: 20 }}></View>
                </ScrollView>
            </View>


        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: verticalScale(50),
    },
    container: {
        flex: 1,
        backgroundColor: '##fff'
    },
    MainBox: {
        width: '80%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: Color.White,
        marginTop: scale(20),
        borderRadius: 20,
        paddingVertical: verticalScale(20),

    },
    topContaintor: {
        color: Color.Main,
        marginTop: scale(5),
        fontSize: scale(22),
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '600'
    },
    bubbles: {

        paddingVertical: moderateScale(5),
        paddingHorizontal: scale(10),
        borderRadius: 15,
        color: Color.Black,
        textAlign: 'center',
        margin: scale(3),
        flexWrap: 'wrap',
        textTransform: 'capitalize'
    },
    bubbleBox: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: scale(10),
        marginLeft: scale(20)
    },
    inputText: {
        alignSelf: 'center',
        backgroundColor: Color.BackgroundColor,
        width: '70%',
        height: verticalScale(40),
        borderRadius: 10,
        marginVertical: scale(10),
        paddingLeft: scale(20),
        color: Color.Black
    },
    Image: {
        alignSelf: 'center',
        marginTop: scale(15)
    }
})

export default Bubbles



