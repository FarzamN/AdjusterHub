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
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import BackAndLogo from '../../components/BackAndLogo';
import {Color} from '../../utils/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const User = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const ItemView = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('reviewer')}
      style={styles.names}>
      <Text style={styles.Text_Name}>{item.title}</Text>
    </TouchableOpacity>
  );

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}> */}
      <BackAndLogo onPress={() => navigation.goBack()} />
      <View style={{height: verticalScale(200)}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#056DFE', '#045CD2', '#056DFE', '#045CD2']}
          style={{flex: 1}}></LinearGradient>
      </View>
      <View
        style={{
          height: verticalScale(400),
          backgroundColor: Color.BackgroundColor,
        }}></View>
      <View style={{position: 'absolute', top: scale(70), width: '100%'}}>
        <View style={styles.InputBox}>
          <Image
            style={styles.SearchImg}
            source={require('../../assets/Images/search.png')}
          />
          <TextInput
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            style={styles.search}
            placeholder="search adjuster's name here"
            placeholderTextColor={Color.placeholderTextColor}
          />
        </View>
        <View style={styles.nameBox}>
          <Image
            style={styles.companyLogo}
            source={require('../../assets/Images/one.png')}
          />
          <View style={{height: verticalScale(380)}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          </View>
        </View>
        <View style={{height: verticalScale(100)}}></View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('addadjusters')}
        style={styles.PlusBox}>
        <FontAwesome5 name={'plus'} size={30} color={Color.White} />
      </TouchableOpacity>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Main,
  },
  linearGradient: {
    height: verticalScale(200),
  },
  InputBox: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    borderRadius: 10,
    flexDirection: 'row',
    height: verticalScale(50),
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: [1, 1],
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: scale(15),
  },
  SearchImg: {
    marginTop: scale(7),
    // marginHorizontal: 10,
  },
  search: {
    color: 'black',
  },
  nameBox: {
    width: '85%',
    alignSelf: 'center',
    backgroundColor: Color.White,
    marginTop: scale(15),
    borderRadius: 20,
    paddingTop: verticalScale(30),
    paddingHorizontal: moderateScale(20),
  },
  companyLogo: {
    width: '100%',
    height: '10%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: scale(20),
  },

  names: {
    height: verticalScale(50),
    width: '100%',
    backgroundColor: Color.InputBackground,
    borderRadius: 7,
    justifyContent: 'center',
    marginBottom: scale(10),
    paddingHorizontal: moderateScale(15),
  },
  Text_Name: {
    color: Color.placeholderTextColor,
    fontSize: scale(14),
    textTransform: 'capitalize',
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
    alignItems: 'center',
  },
});

export default User;
