import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { verticalScale, scale, moderateScale, } from 'react-native-size-matters'
import BackAndLogo from '../../components/BackAndLogo'
import { Color } from '../../utils/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'John Smith',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Peter Burrow',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Alex Heinz',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a01b28ba',
        title: 'Kyle	William',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-f17d91aa97f63',
        title: 'Joe Ethan',
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455709e29d72',
        title: 'George Reece',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed3-3ad5398bb28ba',
        title: 'Oscar Rhys',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd5241aa97f63',
        title: 'James Charlie',
    },
    {
        id: '58694a0f-3da1-471f-bd96-1475371e29d72',
        title: 'William Damian',
    },
];



const User = () => {
    const Item = ({ item }) => (
        <TouchableOpacity style={styles.names}>
            <Text style={styles.Text_Name}>{item.title}</Text>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <BackAndLogo />
            <View style={{ height: '30%', backgroundColor: Color.Main }}>
            </View>
            <View style={{ height: '70%', backgroundColor: Color.BackgroundColor }}>
            </View>
            <View style={{ position: 'absolute', top: 100, width: '100%' }}>

                <View style={styles.InputBox}>
                    <Image style={styles.SearchImg} source={require('../../assets/Images/search.png')} />
                    <TextInput
                        style={styles.search}
                        placeholder="search adjuster's names here"
                        placeholderTextColor={Color.placeholderTextColor} />
                </View>
                <View style={styles.nameBox}>

                    <Image style={styles.companyLogo} source={require('../../assets/Images/four.png')} />
                    <View style={{ height: 400 }}>
                        <FlatList
                            scrollEnabled={true}
                            data={DATA}
                            renderItem={Item}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View style={{ height: 20 }}></View>
            </View>

            <TouchableOpacity style={styles.PlusBox}>
                <FontAwesome5 name={'plus'} size={30} color={Color.White} />
            </TouchableOpacity>
        </SafeAreaView >
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
        height: verticalScale(50)
    },
    SearchImg: {
        marginTop: scale(13),
        marginHorizontal: 10
    },
    search: {
        color: 'black'
    },
    nameBox: {
        width: '80%',
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


// import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
// import React from 'react'
// import { verticalScale, scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters'
// import BackAndLogo from '../../components/BackAndLogo'
// import { Color } from '../../utils/Colors'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient';

// const DATA = [
    //     {
    //         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //         title: 'John Smith',
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //         title: 'Peter Burrow',
    //     },
    //     {
    //         id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //         title: 'Alex Heinz',
    //     },
    //     {
    //         id: 'bd7acbea-c1b1-46c2-aed5-3ad53a01b28ba',
    //         title: 'Kyle	William',
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-f17d91aa97f63',
    //         title: 'Joe Ethan',
    //     },
    //     {
    //         id: '58694a0f-3da1-471f-bd96-1455709e29d72',
    //         title: 'George Reece',
    //     },
    //     {
    //         id: 'bd7acbea-c1b1-46c2-aed3-3ad5398bb28ba',
    //         title: 'Oscar Rhys',
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-fbd5241aa97f63',
    //         title: 'James Charlie',
    //     },
    //     {
    //         id: '58694a0f-3da1-471f-bd96-1475371e29d72',
    //         title: 'William Damian',
    //     },
    // ];

// const Item = ({ name }) => (

//     <View style={styles.nameBox}>
//         <Image style={styles.companyLogo} source={require('../../assets/Images/four.png')} />
//         <TouchableOpacity style={styles.names}>
//             <Text style={styles.Text_Name}>{name}</Text>
//         </TouchableOpacity>

//     </View>
// );
// const User = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <BackAndLogo />
//             <LinearGradient colors={['#045DD3', '#0462E3', '#056DFE']} style={styles.linearGradient}>
                // <View style={styles.InputBox}>
                //     <Image style={styles.SearchImg} source={require('../../assets/Images/search.png')} />
                //     <TextInput
                //         style={styles.search}
                //         placeholder="search adjuster's names here"
                //         placeholderTextColor={Color.placeholderTextColor} />
                // </View>


                // <FlatList
                //     data={DATA}
                //     renderItem={({ item }) => <Item title={item.title} />}
                //     keyExtractor={item => item.id}
                // />

//                 <View style={{ height: 20 }}></View>
//             </LinearGradient>
            // <TouchableOpacity style={styles.PlusBox}>
            //     <FontAwesome5 name={'plus'} size={30} color={Color.White} />
            // </TouchableOpacity>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Color.BackgroundColor
//     },
//     linearGradient: {
//         height: 200
//     },
//     InputBox: {
//         width: '80%',
//         alignSelf: 'center',
//         backgroundColor: Color.White,
//         height: verticalScale(50),
//         borderRadius: 10,
//         flexDirection: 'row',
//         marginTop: scale(10),
//         height: verticalScale(50)
//     },
//     SearchImg: {
//         marginTop: scale(13),
//         marginHorizontal: 10
//     },
//     nameBox: {
//         width: '80%',
//         borderRadius: 10,
//         alignSelf: 'center',
//         backgroundColor: Color.White,
//         marginTop: scale(20),
//         borderRadius: 20,
//         paddingVertical: verticalScale(30)
//     },
//     companyLogo: {
//         width: scale(200),
//         height: verticalScale(40),
//         alignSelf: 'center',
//         marginBottom: scale(20)
//     },
//     names: {
//         backgroundColor: Color.InputBackground,
//         width: '90%',
//         marginLeft: '5%',
//         borderRadius: 10,
//         marginVertical: scale(5),
//         height: 50,
//         justifyContent: 'center',
//         paddingLeft: moderateScale(20)
//     },
//     Text_Name: {
//         color: Color.placeholderTextColor,
//         fontSize: scale(14),
//     },
//     PlusBox: {
//         borderRadius: 100,
//         backgroundColor: Color.Main,
//         width: scale(50),
//         height: scale(50),
//         position: 'absolute',
//         bottom: scale(20),
//         right: scale(20),
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default User
