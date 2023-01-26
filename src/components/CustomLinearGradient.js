import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomLinearGradient = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#056DFE', '#045CD2', '#056DFE', '#045CD2']}
      style={styles.linearGradient}></LinearGradient>
  );
};

export default CustomLinearGradient;

const styles = StyleSheet.create({});
