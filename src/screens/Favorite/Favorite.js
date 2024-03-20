/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';

const Favorite = ({navigation}) => {
  const carData = [
    {
      brand: 'Tesla Model Y',
      image: require('../../../assets/Images/car.png'),
      price: '$35/Day',
    },
    {
      brand: 'Peueot 301',
      image:
        'https://img.paratic.com/dosya/2017/03/2017-peugeot-301-incelemesi-teknik-ozellikleri-ve-fiyati-768x461.jpg',
      price: '$35/Day',
    },
    {
      brand: 'Ford Focus',
      image:
        'https://arabam-blog.mncdn.com/wp-content/uploads/2019/02/Kapak-Yeni-Ford-Focus-1-2-e1550927431926.jpg',
      price: '$35/Day',
    },
  ];
  const initialLikedCars = carData.map((_, index) => index);
  const [likedCars, setLikedCars] = useState(initialLikedCars);

  const toggleLike = index => {
    if (likedCars.includes(index)) {
      setLikedCars(likedCars.filter(item => item !== index));
    } else {
      setLikedCars([...likedCars, index]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}></View>
        <HeaderLogo />
        <View style={styles.headerButton}></View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 20}}>
        <View style={styles.body}>
          <Text style={styles.ourCarsText}>Favorites</Text>

          {carData.map((car, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('CarDetail')}
              style={styles.card}>
              <TouchableOpacity
                style={styles.likeButton}
                onPress={() => toggleLike(index)} // Toggle like status on press
              >
                <Ionicons
                  name={likedCars.includes(index) ? 'heart' : 'heart-outline'}
                  size={25}
                  color={likedCars.includes(index) ? 'red' : 'red'} // Change color based on like status
                />
              </TouchableOpacity>
              <Image
                style={styles.carPhoto}
                source={
                  typeof car.image === 'string' ? {uri: car.image} : car.image
                }
              />
              <View style={styles.cardRow}>
                <View style={{margin: 10}}>
                  <Text style={styles.brandText}>{car.brand}</Text>
                  <Text style={styles.bookNowText}>Book Now</Text>
                </View>

                <View style={{margin: 10}}>
                  <Text style={styles.brandText}>{car.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;

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
  imgArea: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
    height: '100%',
    borderRadius: 15,
  },
  dateArea: {
    width: '100%',
    height: null,
    backgroundColor: '#F2F2F2',
    marginVertical: 10,
    borderRadius: 12,
    padding: 10,
  },
  dateAreaTitle: {
    fontSize: 18,
    fontFamily: 'GothamRounded-Medium',
    textAlign: 'center',
  },
  detailArea: {
    padding: 10,
    width: '45%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailTitle: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  dateText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 12,
    color: '#000',
    marginLeft: 10,
  },
  searchButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#C80000',
    marginTop: 10,
  },
  searchText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 18,
    color: '#fff',
  },
  ourCarsText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  card: {
    backgroundColor: '#F2F2F2',
    height: null,
    width: '100%',
    borderRadius: 12,
    marginVertical: 15,
  },
  carPhoto: {
    width: '100%',
    height: 200,
    backgroundColor: 'grey',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#000',
    lineHeight: 23,
  },
  bookNowText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#C80000',
    lineHeight: 23,
  },
  moreButton: {
    width: '85%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C80000',
    borderRadius: 12,
    marginVertical: 10,
  },
  moreButtonText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 18,
    color: '#fff',
  },
  bestOfferCard: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C80000',
    borderRadius: 12,
    marginBottom: 30,
    marginTop: 15,
  },
  bestOfferText: {
    fontSize: 25,
    fontFamily: 'GothamRounded-Bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
  },
  aboutUsTitle: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  aboutUsCell: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconArea: {
    width: null,
    height: '100%',
  },
  textArea: {
    width: '85%',
    height: '100%',
    marginLeft: 10,
  },
  aboutUsText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 16,
    color: '#000',
    lineHeight: 20,
    textAlign: 'left',
  },
  likeButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 9,
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
});
