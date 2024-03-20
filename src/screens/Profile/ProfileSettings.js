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

const ProfileSettings = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 20}}>
        <View style={styles.body}>
          <View style={styles.profileArea}>
            <TouchableOpacity style={styles.avatarArea}>
              <Image source={require('../../../assets/Images/avatar.png')} />
            </TouchableOpacity>

            <Text style={styles.nameText}>Olivia Flo</Text>

            <Text style={styles.mailText}>olia.flo@gmail.com</Text>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Name</Text>
            <View style={styles.inputBox}>
              <TextInput
                maxLength={40}
                style={styles.input}
                placeholder="Your Name"
                onChangeText={value => setName(value)}
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Surname</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Your Surname"
                maxLength={40}
                style={styles.input}
                onChangeText={value => setSurname(value)}
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Phone</Text>
            <View style={styles.inputBox}>
              <TextInput
                maxLength={40}
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={value => setPhone(value)}
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>ID/Passport No</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="ID/Passport No"
                maxLength={40}
                style={styles.input}
                onChangeText={value => setIdNumber(value)}
                autoCorrect={false}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={styles.buttonRed}>
            <Text style={styles.buttonRedText}>Change Password</Text>
            <View style={{position: 'absolute', right: 10}}>
              <Ionicons name="chevron-forward" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;

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
  profileArea: {
    width: '100%',
    height: null,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10,
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
  buttonRed: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#C80000',
    marginTop: 10,
  },
  buttonRedText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
});
