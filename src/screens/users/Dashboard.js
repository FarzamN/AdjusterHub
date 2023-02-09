import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {verticalScale, scale} from 'react-native-size-matters';
import BackWithMenu from '../../components/BackWithMenu';
import {Color} from '../../utils/Colors';

const Dashboard = ({navigation}) => {
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
  ];
  const Item = ({item, onPress}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('user')}
      style={styles.item}>
      <Image style={styles.Images} source={item.Image} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.Container}>
      <BackWithMenu
        onPress_back={() => navigation.navigate('login')}
        onPress={() => navigation.openDrawer()}
      />
      <View style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <FlatList
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={Item}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{marginTop: scale(10)}}
        />
        <View style={{height: verticalScale(10)}}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#0568F2',
  },
  item: {
    padding: 20,
    marginHorizontal: scale(5),
    width: '47%',
    height: verticalScale(160),
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  Images: {},
});

export default Dashboard;
