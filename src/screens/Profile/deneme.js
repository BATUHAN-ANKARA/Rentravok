import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const deneme = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>deneme Screen</Text>
      <Ionicons name="power-outline" color="#626D7C" size={12} />
    </SafeAreaView>
  );
};

export default deneme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
