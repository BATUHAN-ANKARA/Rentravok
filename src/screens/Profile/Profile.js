/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}></View>
        <HeaderLogo />
        <View style={styles.headerButton}></View>
      </View>

      <View style={styles.body}>
        <View style={styles.profileArea}>
          <TouchableOpacity style={styles.avatarArea}>
            <Image source={require('../../../assets/Images/avatar.png')} />
          </TouchableOpacity>

          <Text style={styles.nameText}>Olivia Flo</Text>

          <Text style={styles.mailText}>olia.flo@gmail.com</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileSettings')}
          style={styles.button}>
          <Text style={styles.buttonText}>Profile Settings</Text>
          <View style={{position: 'absolute', right: 10}}>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('BookHistory')}
          style={styles.button}>
          <Text style={styles.buttonText}>Book History</Text>
          <View style={{position: 'absolute', right: 10}}>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adresses</Text>
          <View style={{position: 'absolute', right: 10}}>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 15 : 0,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#C80000',
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileArea: {
    width: '100%',
    height: null,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10,
    marginBottom: 20,
  },
  avatarArea: {
    width: 125,
    height: 125,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#000',
  },
  mailText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#C80000',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
});
