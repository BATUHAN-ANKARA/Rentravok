/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fuel from '../../../assets/Svg/Fuel';
import Transmission from '../../../assets/Svg/Transmission';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';

const CarDetail = ({navigation}) => {
  const [customLocation, setCustomLocation] = useState(false);

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
        style={{paddingVertical: 20}}>
        <View style={styles.body}>
          <View style={styles.card}>
            <Image source={require('../../../assets/Images/image3.png')} />

            <View>
              <Text style={styles.boldText}>Tesla Model Y</Text>

              <Text style={styles.normalText}>2022 Tesla Model Y</Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="heart-outline" size={25} color="red" />
            </TouchableOpacity>
          </View>

          <Text style={styles.priceText}>$35/Day</Text>

          <View style={styles.iconsArea}>
            <View style={{alignItems: 'center'}}>
              <Fuel />

              <Text style={styles.iconText}>Hybrid</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Transmission />

              <Text style={styles.iconText}>Automatic</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Ionicons name="checkbox" size={20} color="grey" />

              <Text style={styles.iconText}>Insurance</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.checkOutButton}>
            <Text style={styles.checkOutButtonText}>CHECKOUT</Text>
          </TouchableOpacity>

          <Text style={styles.bookDetailsText}>Book Details</Text>

          <View style={styles.cell}>
            <Text style={styles.descriptionText}>Start Date & Time</Text>

            <Text style={styles.descriptionLightText}>
              12.08.2023 Saturday 12:00
            </Text>
          </View>

          <View style={styles.cell}>
            <Text style={styles.descriptionText}>End Date & Time</Text>

            <Text style={styles.descriptionLightText}>
              15.08.2023 Wednesday 12:00
            </Text>
          </View>

          <View style={styles.cell}>
            <Text style={styles.descriptionText}>Insurance</Text>

            <Text style={styles.descriptionLightText}>Free</Text>
          </View>

          <View style={{...styles.cell, borderBottomWidth: 0}}>
            <Text style={{...styles.descriptionText, color: '#C80000'}}>
              Total
            </Text>

            <Text style={{...styles.descriptionLightText, color: '#C80000'}}>
              $600
            </Text>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setCustomLocation(false);
              }}
              style={styles.locationButton}>
              <Text style={styles.locationButtonText}>Pick Up Yourself</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setCustomLocation(true);
              }}
              style={{
                ...styles.locationButton,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#C80000',
              }}>
              <Text style={{...styles.locationButtonText, color: '#C80000'}}>
                Custom Location
              </Text>
            </TouchableOpacity>
          </View>

          {customLocation === true ? (
            <View
              style={{
                width: '100%',
                height: 150,
                borderWidth: 1,
              }}></View>
          ) : (
            <Text style={styles.locationText}>
              Location: 2665 Encinal Canyon Road Malibu Los Angeles County
              California 90265 United States
            </Text>
          )}

          <Text style={styles.descriptionLightText}>Photos</Text>

          <View style={styles.galleryArea}>
            <View style={styles.photo}>
              <Image
                source={require('../../../assets/Images/car.png')}
                style={{width: '100%', height: '100%', borderRadius: 15}}
              />
            </View>

            <View style={styles.photo}>
              <Image
                source={require('../../../assets/Images/car.png')}
                style={{width: '100%', height: '100%', borderRadius: 15}}
              />
            </View>

            <View style={styles.photo}>
              <Image
                source={require('../../../assets/Images/car.png')}
                style={{width: '100%', height: '100%', borderRadius: 15}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarDetail;

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
    paddingVertical: 10,
    paddingRight: 5,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boldText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 18,
    color: '#000',
    lineHeight: 20,
  },
  normalText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: '#000',
    lineHeight: 20,
  },
  priceText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 16,
    color: '#C80000',
    marginVertical: 10,
  },
  iconsArea: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
  checkOutButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#C80000',
    marginTop: 20,
  },
  checkOutButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  bookDetailsText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    color: '#000',
    marginVertical: 10,
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  descriptionText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
  descriptionLightText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  locationButton: {
    width: '47%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C80000',
    borderRadius: 10,
  },
  locationButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 15,
    color: '#fff',
  },
  locationText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 15,
    color: '#C80000',
    lineHeight: 20,
    marginVertical: 10,
  },
  galleryArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  photo: {
    width: '30%',
    height: Dimensions.get('screen').width * 0.3 - 20,
    backgroundColor: 'grey',
    borderRadius: 15,
  },
  customLocationContainer: {
    width: '100%',
  },
});
