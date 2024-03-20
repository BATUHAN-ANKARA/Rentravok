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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthLogo from '../../../assets/Svg/AuthLogo';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 20}}>
        <View style={styles.body}>
          <View style={styles.logo}>
            <AuthLogo />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter Your Email"
                inputMode="email"
                maxLength={40}
                style={styles.input}
                onChangeText={value => setEmail(value)}
              />
            </View>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Type A Password"
                maxLength={40}
                style={styles.input}
                onChangeText={value => setPassword(value)}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('BottomTabNavigator')}
            style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signInText}>
              Don't have an account?{' '}
              <Text
                style={{
                  ...styles.signInText,
                  color: '#C80000',
                  fontFamily: 'GothamRounded-MEdium',
                }}>
                Sign UP
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 15 : 0,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  acceptText: {
    fontSize: 14,
    fontFamily: 'GothamRounded-Book',
    color: 'grey',
    marginLeft: 5,
  },
  button: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C80000',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  signInText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
});
