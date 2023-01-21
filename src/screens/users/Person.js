import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import BackAndLogo from '../../components/BackAndLogo'
import { Color } from '../../utils/Colors'
import LinearGradient from 'react-native-linear-gradient';

const Person = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <BackAndLogo />
            <LinearGradient colors={['#045DD3', '#0462E3', '#056DFE']} style={styles.linearGradient}>
                <View>
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
})

export default Person
