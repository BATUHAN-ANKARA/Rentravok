/* eslint-disable no-unused-vars */
import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import SplashLogo from '../../../assets/Svg/SplashLogo';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Register');
  }, 1500);

  return (
    <SafeAreaView style={styles.container}>
      <SplashLogo />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
