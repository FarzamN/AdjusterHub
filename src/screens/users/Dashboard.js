import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
import BackWithMenu from '../../components/BackWithMenu';
import { Color } from '../../utils/Colors';

const Dashboard = ({ navigation }) => {
  const DATA = [
    {
      id: '1',
      Image: require('../../assets/Images/one.png'),
    },
    {
      id: '2',
      Image: require('../../assets/Images/two.png'),
    },
    {
      id: '3',
      Image: require('../../assets/Images/three.png'),
    },
    {
      id: '4',
      Image: require('../../assets/Images/four.png'),
    },
    {
      id: '5',
      Image: require('../../assets/Images/five.png'),
    },
    {
      id: '6',
      Image: require('../../assets/Images/six.png'),
    },
    {
      id: '7',
      Image: require('../../assets/Images/seven.png'),
    },
    {
      id: '8',
      Image: require('../../assets/Images/eight.png'),
    },
    {
      id: '9',
      Image: require('../../assets/Images/nine.png'),
    },
    {
      id: '10',
      Image: require('../../assets/Images/ten.png'),
    },
    {
      id: '11',
      Image: require('../../assets/Images/eleven.png'),
    },
    {
      id: '12',
      Image: require('../../assets/Images/twelve.png'),
    },
    {
      id: '13',
      Image: require('../../assets/Images/tharteen.png'),
    },
    {
      id: '14',
      Image: require('../../assets/Images/fourteen.png'),
    },
    {
      id: '15',
      Image: require('../../assets/Images/fifteen.png'),
    },
    {
      id: '16',
      Image: require('../../assets/Images/sixten.png'),
    },
  ];
  const Item = ({ item, onPress }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('user')}
      style={styles.item}>
      <Image style={styles.Images} source={item.Image} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={'dark-content'} />
      <BackWithMenu
        onPress_back={() => navigation.navigate('login')}
        onPress={() => navigation.openDrawer()}
      />
      <View style={{ flex: 1, backgroundColor: Color.BackgroundColor }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={Item}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{ marginTop: scale(10) }}
        />
        <View style={{ height: verticalScale(10) }}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {

    marginLeft : Dimensions.get('screen').width * 0.033,
    width: Dimensions.get('screen').width * 0.45,
    height: Dimensions.get('screen').width * 0.45,
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  Images: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
});

export default Dashboard;
