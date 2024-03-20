/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';
import SmallCar from '../../../assets/Svg/SmallCar';

const BookHistoryDetail = ({navigation}) => {
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
        <Text style={styles.orderTitle}>
          Order Number: <Text style={styles.orderText}>1234567</Text>
        </Text>

        <View style={styles.card}>
          <View>
            <Text style={styles.carTitle}>Tesla Model Y Prijs</Text>
            <Text style={styles.carTitleLight}>2022 Tesla Model Y</Text>
          </View>
          <SmallCar />
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="calendar" size={35} color="#C80000" />
            <View>
              <Text style={styles.dateTitle}>Start From</Text>
              <Text style={styles.dateText}>12.08.2023 12:00</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="calendar" size={35} color="#C80000" />
            <View>
              <Text style={styles.dateTitle}>End To</Text>
              <Text style={styles.dateText}>13.08.2023 12:00</Text>
            </View>
          </View>
        </View>

        <Text style={styles.dateTitle}>Pickup Address</Text>
        <View style={styles.card}>
          <Ionicons name="location" size={35} color="#C80000" />
          <Text numberOfLines={3} style={styles.addressText}>
            2665 Encinal Canyon Road Malibu Los Angeles County California 90265
            United States
          </Text>
        </View>

        <Text style={styles.dateTitle}>Drop Address</Text>
        <View style={styles.card}>
          <Ionicons name="location" size={35} color="#C80000" />
          <Text numberOfLines={3} style={styles.addressText}>
            2665 Encinal Canyon Road Malibu Los Angeles County California 90265
            United States
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookHistoryDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 15 : 0,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: null,
    width: '100%',
    paddingVertical: 5,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addressText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    width: '90%',
    textAlign: 'center',
    color: '#000',
    lineHeight: 18,
  },
  carTitle: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#000',
    lineHeight: 18,
  },
  carTitleLight: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#000',
    lineHeight: 18,
  },
  dateText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    color: '#000',
    lineHeight: 18,
  },
  dateTitle: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#000',
    lineHeight: 18,
  },
  orderTitle: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#000',
    lineHeight: 18,
    marginVertical: 10,
  },
  orderText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: '#000',
    lineHeight: 18,
  },
});
