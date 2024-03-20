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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthLogo from '../../../assets/Svg/AuthLogo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const handleConfirm = date => {
    setSelectedDate(date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    // Kontrol edip, gün ve ay kısmı 10'dan küçükse başına sıfır ekliyoruz
    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();
    setSelectedMonth(formattedMonth);
    setSelectedDay(formattedDay);
    setSelectedYear(year);
    // Seçilen tarihten yaş hesaplama
    const ageDiffMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    // Yaş kontrolü
    if (age <= 17) {
      Alert.alert('Warning', 'You are not older than 18', [
        {text: 'Ok', onPress: () => setSelectedDate(null)},
      ]);
      return;
    }
    setDatePickerVisibility(false);
    setBirthDate(year + '/' + formattedMonth + '/' + formattedDay);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const next = () => {
    console.log(selectedYear);
    if (selectedDate === '' || selectedDate === null) {
      Alert.alert('Form Error', 'Please input your informations correct', [
        {text: 'Ok', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    } else if (acceptTerm === false) {
      Alert.alert('Form Error', 'Please accept terms of use for this app', [
        {text: 'Ok', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      navigation.navigate('BottomTabNavigator', {birthDate});
    }
  };

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
            <Text style={styles.inputLabel}>Date Of Birth</Text>
            <TouchableOpacity style={styles.dateArea} onPress={showDatePicker}>
              <Text style={styles.input}>
                {selectedDate
                  ? `${selectedDay}/${selectedMonth}/${selectedYear}`
                  : 'Click For Modal'}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={new Date()}
            />
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
                autoCorrect={false}
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
                autoCorrect={false}
              />
            </View>
          </View>

          {acceptTerm ? (
            <TouchableOpacity
              onPress={() => setAcceptTerm(!acceptTerm)}
              style={{...styles.row, marginTop: 10}}>
              <Ionicons name="checkbox" size={20} color="green" />
              <Text style={styles.acceptText}>
                I accept terms of use for this app
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setAcceptTerm(!acceptTerm)}
              style={{...styles.row, marginTop: 10}}>
              <Ionicons name="square-outline" size={20} color="grey" />
              <Text style={styles.acceptText}>
                I accept term of use for this app
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => next()} style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}>
              Already have an account?{' '}
              <Text
                style={{
                  ...styles.signInText,
                  color: '#C80000',
                  fontFamily: 'GothamRounded-MEdium',
                }}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
  dateArea: {
    width: '100%',
    height: 55,
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    justifyContent: 'center',
    paddingVertical: 10,
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
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#bbb',
    marginVertical: 20,
    borderBottomWidth: 4,
    borderRightWidth: 3,
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#C80000',
    textAlign: 'center',
  },
  signInText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
});
