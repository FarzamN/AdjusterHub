import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import BackAndLogo from '../../components/BackAndLogo';
import {Color} from '../../utils/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import LineasrGradient from 'react-native-linear-gradient';
import {imageURl} from '../../utils/APIEssentials';

const User = ({navigation, route}) => {
  const {employees, companyLogo, company_id} = route.params;
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(employees);
  const [masterDataSource, setMasterDataSource] = useState(employees);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        console.log(item.full_name);
        const itemData = item.full_name
          ? item.full_name.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      console.log('else');
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('reviewer')}
      style={styles.names}>
      <Text style={styles.Text_Name}>{item.adjuster_id}</Text>
    </TouchableOpacity>
  );

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          width: '100%',
        }}
      />
    );
  };

  console.log('filteredDataSource', filteredDataSource);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}> */}
      <BackAndLogo onPress={() => navigation.goBack()} />
      <View style={{height: verticalScale(200)}}>
        <LineasrGradient
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 0}}
          colors={['#056DFE', '#045CD2']}
          style={{flex: 1}}></LineasrGradient>
      </View>
      <View
        style={{
          height: verticalScale(400),
          backgroundColor: Color.BackgroundColor,
        }}></View>
      <View style={{position: 'absolute', top: scale(120), width: '100%'}}>
        <View style={styles.InputBox}>
          <Image
            style={styles.SearchImg}
            source={require('../../assets/Images/search.png')}
          />
          <TextInput
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            style={styles.search}
            placeholder="Search adjuster's name here"
            placeholderTextColor={Color.placeholderTextColor}
          />
        </View>
        <View style={[styles.nameBox,{height: filteredDataSource.length == 0 ?  scale(300) : Dimensions.get("screen").height * .7 }]}>
          <View style={styles.box}>
            <Image
              style={styles.companyLogo}
              source={{uri: imageURl + companyLogo}}
            />
          </View>
          <ScrollView style={{flex : 1, paddingTop: scale(5)}} >
            {filteredDataSource?.map(item => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('reviewer', {
                        adjusterId: item.adjuster_id,
                        companyLogo,
                      })
                    }
                    style={styles.names}>
                    <Text style={styles.Text_Name}>
                      {item.first_name} {item.last_name}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}

            {filteredDataSource.length == 0 && (
              <View
                style={{
                  top: scale(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Color.Main,
                    fontSize: scale(18),
                    textTransform: 'uppercase',
                    fontFamily: 'Evogria',
                  }}>
                  No adjusters found
                </Text>
                <Text
                  style={{
                    color: Color.Main,
                    fontSize: scale(12),
                    textTransform: 'uppercase',
                    fontFamily: 'Helvetica',
                  }}>
                  start adding some
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
        <View style={{height: verticalScale(100)}}></View>
      </View>
      {/* </ScrollView> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('addadjusters', {
            company_id: company_id,
          })
        }
        style={styles.PlusBox}>
        {/* <FontAwesome5 name={'plus'} size={30} color={Color.White} /> */}
        <Foundation name={'plus'} size={30} color={Color.White} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  linearGradient: {
    height: verticalScale(150),
  },
  InputBox: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    borderRadius: 7,
    flexDirection: 'row',
    height: verticalScale(40),
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: [1, 1],
    alignItems: 'center',
    paddingLeft: scale(15),
    zIndex: 100,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  SearchImg: {
    marginTop: scale(7),
  },
  search: {
    color: 'black',
    marginTop: 5,
    height: verticalScale(20),
    paddingHorizontal: moderateScale(15),
  },
  nameBox: {
    top: 5,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(15),
    borderRadius: scale(15),
    paddingTop: verticalScale(30),
    paddingHorizontal: moderateScale(15),
    paddingBottom: verticalScale(30),
    zIndex: 100,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  companyLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: -15,
  },
  box: {
    width: scale(200),
    height: Dimensions.get("screen").height * 0.1 ,
    alignSelf: 'center',
    // marginVertical:verticalScale(10)
  },
  names: {
    height: verticalScale(45),
    width: '100%',
    backgroundColor: Color.InputBackground,
    borderRadius: 7,
    justifyContent: 'center',
    marginBottom: scale(10),
    paddingHorizontal: moderateScale(25),
    marginVertical: -5,
    // flexDirection:'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
    // flex: 1
  },
  Text_Name: {
    color: Color.placeholderTextColor,
    fontSize: scale(14),
    textTransform: 'capitalize',
  },
  PlusBox: {
    borderRadius: 100,
    backgroundColor: Color.Main,
    width: scale(53),
    height: scale(53),
    position: 'absolute',
    bottom: scale(23),
    right: scale(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default User;
