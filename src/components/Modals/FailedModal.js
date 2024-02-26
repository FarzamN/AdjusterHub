import React from "react";
import {View, Text} from 'react-native'
import LottieView from "lottie-react-native";
import Modal from 'react-native-modal';
import { Color } from "../../utils/Colors";
import { scale } from "react-native-size-matters";

const FailedModal = (props) => {
    return ( <Modal
        testID={'modal'}
        isVisible={props.isVisible}
        onBackdropPress={() => props.setVisible()}>
        <View
          style={{
            backgroundColor: '#fff',
            position: 'absolute',
            top: 100,
            width: props.subMessage === 'Please add at least one description' ? '100%' : '90%',
            flexDirection: 'row',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            alignSelf: 'center',
            borderColor: Color.Main,
            paddingLeft: 20,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Evogria',
                color: Color.Main,
                fontSize: scale(16),
                textTransform: 'uppercase',
                top: props.top
              }}>
              {props.message}
            </Text>
            <Text style={{color: Color.Main, fontSize: scale(15),
               fontFamily:'Helvetica'
            }}>
               {props.subMessage}
            </Text>
          </View>
          <LottieView
            style={{
              width: 80,
              height: 80,
              // marginTop: scale(-10),
            }}
            source={require('../../assets/Lottie/failed.json')}
            colorFilters={[
              {
                keypath: 'button',
                color: '#E94057',
              },
            ]}
            autoPlay
            loop
          />
        </View>
      </Modal>)
}
export default FailedModal;