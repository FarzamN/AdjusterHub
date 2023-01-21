import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import BackWithMenu from '../../components/BackWithMenu';
import {Color} from '../../utils/Colors';

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
const Item = ({item}) => (
  <TouchableOpacity style={styles.item}>
    <Image style={styles.Images} source={item.Image} />
  </TouchableOpacity>
);

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackWithMenu />
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={Item}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{marginTop: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.BackgroundColor,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '40%',
    height: 200,
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Images: {},
});

export default Dashboard;
