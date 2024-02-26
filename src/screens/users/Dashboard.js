import React, {useCallback, useEffect, useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native'
import {verticalScale, scale} from 'react-native-size-matters'
import BackWithMenu from '../../components/BackWithMenu'
import {Color} from '../../utils/Colors'
import {useFocusEffect} from '@react-navigation/native'
import {check_account, fetchCompanies, get_phrases} from '../../redux/actions/Auth'
import {imageURl} from '../../utils/APIEssentials'
import {useDispatch, useSelector} from 'react-redux'


const Dashboard = ({navigation,route}) => {
  const dispatch = useDispatch()
  const [comnayData, setCompanayData] = useState([])
  const user_detail = useSelector(state => state.userDetails)
  const [visible2, setVisible2] = useState(false)

  useFocusEffect(
    useCallback(() => {
      fetchCompanies(setCompanayData)
      dispatch(get_phrases())
      dispatch(check_account(user_detail?.user_id,setVisible2))
    },[]),
  )

  const Item = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate('user', {
          companyLogo: item.company_image,
          employees: item.adjusters,
          company_id: item.company_id
        })
      }
      style={[
        {
          marginLeft: Dimensions.get('screen').width * 0.033,
          width: Dimensions.get('screen').width * 0.46,
          height: Dimensions.get('screen').width * 0.45,
          backgroundColor: Color.White,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
        index % 2 == 0
          ? {
              marginRight: scale(3),
            }
          : {
              marginLeft: scale(3),
            },
      ]}>
      <Image
        style={styles.Images}
        source={{uri: imageURl + item.company_image }}
      />
    </TouchableOpacity>
  )

  return (
    <>
      <SafeAreaView style={styles.Container} />
      <SafeAreaView style={{flex: 1, backgroundColor: Color.BackgroundColor}}>
        <StatusBar barStyle={'dark-content'} />
        <BackWithMenu
          // onPress_back={() => navigation.navigate('login')}
          onPress={() => navigation.openDrawer()}
          menu={{marginRight: scale(-4)}}
        />
        <View style={{flex: 2, backgroundColor: Color.BackgroundColor}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.company_id}
            data={comnayData}
            renderItem={Item}
            horizontal={false}
            numColumns={2}
            // ItemSeparatorComponent={() => <View style={{height: 5}} />}
            columnWrapperStyle={{marginTop: scale(6)}}
          />
          <View style={{height: verticalScale(10)}}></View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 0,
    backgroundColor: '#ffffff',
  },
  item: {
    marginLeft: Dimensions.get('screen').width * 0.033,
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
    resizeMode: 'contain',
  },
})

export default Dashboard