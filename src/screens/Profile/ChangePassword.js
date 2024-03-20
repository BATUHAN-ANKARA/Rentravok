/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthLogo from '../../../assets/Svg/AuthLogo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}>
          <Ionicons name="chevron-back" color="#fff" size={25} />
        </TouchableOpacity>

        <HeaderLogo />

        <View style={styles.headerButton}></View>
      </View>
      <View style={styles.body}>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputBox}>
            <TextInput
              maxLength={40}
              style={styles.input}
              placeholder="Password"
              onChangeText={value => setPassword(value)}
              autoCorrect={false}
            />
          </View>
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Password Confirm</Text>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Password Confirm"
              maxLength={40}
              style={styles.input}
              onChangeText={value => setPasswordConfirm(value)}
              autoCorrect={false}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 15 : 0,
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
  body: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  inputBox: {
    width: '100%',
    height: 55,
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
  },
  input: {
    width: '85%',
    height: '100%',
    padding: 10,
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#000',
  },
  inputArea: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: 'GothamRounded-Medium',
    color: '#000',
    lineHeight: 23,
    marginBottom: 5,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C80000',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#C80000',
  },
});
