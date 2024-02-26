import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native'



const LoaderModal = props => {

  return (
    <Modal onBackdropPress={props.onBackdropPress} isVisible={props.isVisible} style={{margin: 0}}>
        <View style={{ height: '40%', width: '70%', alignSelf: 'center' }}>
       <LottieView
          // style={{width: scale(250), height: verticalScale(250)}}
          source={require('../../assets/Lottie/Loader.json')}
          autoPlay
          loop
          speed={0.7}
        />
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

});
export default LoaderModal;
