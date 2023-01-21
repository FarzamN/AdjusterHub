import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { verticalScale, scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import BackAndLogo from '../../components/BackAndLogo'
import { Color } from '../../utils/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

Color
const User = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.PlusBox}>
                <FontAwesome5 name={'plus'} size={30} color={Color.White} />
            </View>
            <BackAndLogo />
            <LinearGradient colors={['#045DD3', '#0462E3', '#056DFE']} style={styles.linearGradient}>
                <View style={styles.InputBox}>
                    <Image style={styles.SearchImg} source={require('../../assets/Images/search.png')} />
                    <TextInput
                        style={styles.search}
                        placeholder="search adjuster's names here"
                        placeholderTextColor={Color.placeholderTextColor} />
                </View>

                <View style={styles.nameBox}>
                    <Image style={styles.companyLogo} source={require('../../assets/Images/four.png')} />
                    <TouchableOpacity style={styles.names}>
                        <Text style={styles.Text_Name}>John Smith</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.names}>
                        <Text style={styles.Text_Name}>Peter Burrow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.names}>
                        <Text style={styles.Text_Name}>Alex Heinz</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BackgroundColor
    },
    linearGradient: {
        height: 200
    },
    InputBox: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: Color.White,
        height: verticalScale(50),
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: scale(10),
        height: verticalScale(50)
    },
    SearchImg: {
        marginTop: scale(13),
        marginHorizontal: 10
    },
    nameBox: {
        width: '80%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: Color.White,
        marginTop: scale(20),
        borderRadius: 20,
        paddingVertical: verticalScale(30)
    },
    companyLogo: {
        width: scale(200),
        height: verticalScale(40),
        alignSelf: 'center',
        marginBottom: scale(20)
    },
    names: {
        backgroundColor: Color.InputBackground,
        width: '90%',
        marginLeft: '5%',
        borderRadius: 10,
        marginVertical: scale(5),
        height: 50,
        justifyContent: 'center',
        paddingLeft: moderateScale(20)
    },
    Text_Name: {
        color: Color.placeholderTextColor,
        fontSize: scale(14),
    },
    PlusBox: {
        borderRadius: 100,
        backgroundColor: Color.Main,
        width: scale(50),
        height: scale(50),
        position: 'absolute',
        bottom: scale(20),
        right: scale(20),
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default User
