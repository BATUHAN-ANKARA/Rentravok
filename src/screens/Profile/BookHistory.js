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

const BookHistory = ({navigation}) => {
  const trips = [
    {
      carName: 'Tesla Model Y',
      startDate: '12.08.2023',
      endDate: '12.08.2023',
      address: '2665 Encinal Canyon Road Malibu....',
    },
    {
      carName: 'Toyota Camry',
      startDate: '15.08.2023',
      endDate: '18.08.2023',
      address: '123 Main Street, City...',
    },
    {
      carName: 'Ford Mustang',
      startDate: '20.08.2023',
      endDate: '22.08.2023',
      address: '456 Elm Avenue, Town...',
    },
    {
      carName: 'BMW X5',
      startDate: '25.08.2023',
      endDate: '28.08.2023',
      address: '789 Oak Road, Village...',
    },
    {
      carName: 'Honda Civic',
      startDate: '02.09.2023',
      endDate: '05.09.2023',
      address: '567 Pine Street, Suburb...',
    },
    {
      carName: 'Tesla Model Y',
      startDate: '12.08.2023',
      endDate: '12.08.2023',
      address: '2665 Encinal Canyon Road Malibu....',
    },
    {
      carName: 'Toyota Camry',
      startDate: '15.08.2023',
      endDate: '18.08.2023',
      address: '123 Main Street, City...',
    },
    {
      carName: 'Ford Mustang',
      startDate: '20.08.2023',
      endDate: '22.08.2023',
      address: '456 Elm Avenue, Town...',
    },
    {
      carName: 'BMW X5',
      startDate: '25.08.2023',
      endDate: '28.08.2023',
      address: '789 Oak Road, Village...',
    },
    {
      carName: 'Honda Civic',
      startDate: '02.09.2023',
      endDate: '05.09.2023',
      address: '567 Pine Street, Suburb...',
    },
  ];

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
          {trips.map((trip, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('BookHistoryDetail')}
              key={index}
              style={styles.card}>
              <Text style={styles.carName}>{trip.carName}</Text>

              <View style={{...styles.row, justifyContent: 'space-between'}}>
                <View style={styles.row}>
                  <Ionicons name="calendar" size={20} color="#C80000" />
                  <Text style={styles.dateText}>
                    <Text>Started:</Text> {trip.startDate}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Ionicons name="calendar" size={20} color="#C80000" />
                  <Text style={styles.dateText}>
                    <Text>Ended:</Text> {trip.endDate}
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <Ionicons name="location" size={20} color="#C80000" />
                <Text style={styles.addressText}>{trip.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookHistory;

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
    width: '100%',
    height: null,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#F4F4F4',
    marginTop: 10,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carName: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 18,
    color: '#000',
    lineHeight: 20,
  },
  dateText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
    marginLeft: 5,
  },
  detailText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  addressText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
    marginLeft: 5,
  },
});
