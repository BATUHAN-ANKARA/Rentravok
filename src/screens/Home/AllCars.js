/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AllCars = ({navigation}) => {
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
    {
      brand: 'Toyota Corolla',
      image:
        'https://cdn.whichcar.com.au/assets/w_4096/a8500981/2023-toyota-corolla-zr-hybrid-hatch-silver-1.jpg',
      price: '$40/Day',
    },
    {
      brand: 'Honda Civic',
      image:
        'https://cdn.motor1.com/images/mgl/rv9P9/s3/2022-honda-civic-prototype.jpg',
      price: '$40/Day',
    },
    {
      brand: 'Chevrolet Cruze',
      image:
        'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/672264/2018-chevrolet-cruze-in-depth-model-review-car-and-driver-photo-698444-s-original.jpg?crop=0.734xw:0.601xh;0.133xw,0.176xh&resize=1200:*',
      price: '$40/Day',
    },
    {
      brand: 'Hyundai Elantra',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-elantra-korea-1677509012.jpg?crop=0.663xw:0.762xh;0.140xw,0.165xh&resize=640:*',
      price: '$45/Day',
    },
    {
      brand: 'Nissan Sentra',
      image:
        'https://www.motortrend.com/uploads/2023/03/2023-Nissan-Sentra-SR-front-three-quarter-view-19.jpg',
      price: '$45/Day',
    },
    {
      brand: 'Kia Forte',
      image:
        'https://s7d2.scene7.com/is/image/kiamotors/kia_forte_2023_tab-bottom_exterior-accents:S?dpr=on%2C2.625',
      price: '$45/Day',
    },
    {
      brand: 'Mazda3',
      image:
        'https://www.mazdausa.com/siteassets/vehicles/2023/mazda3-sedan/build-and-price/trims/ext.-360s/2.5/white/e360-my22-mazda3-sedan-fwd-2-5s-snowflakewhitepearl-023.jpg',
      price: '$50/Day',
    },
    {
      brand: 'Volkswagen Jetta',
      image:
        'https://media.ed.edmunds-media.com/volkswagen/jetta/2022/oem/2022_volkswagen_jetta_sedan_se_fq_oem_1_1600.jpg',
      price: '$50/Day',
    },
    {
      brand: 'Subaru Impreza',
      image:
        'https://cars.usnews.com/static/images/Auto/custom/15240/2024_Subaru_Impreza_Angular_Front_1.jpg',
      price: '$50/Day',
    },
    {
      brand: 'Audi A3',
      image:
        'https://audimediacenter-a.akamaihd.net/system/production/media/90567/images/72391bd2d21a80a761f0df1bd5bff197d5804daa/A201895_blog.jpg?1583155437',
      price: '$55/Day',
    },
    {
      brand: 'Mercedes-Benz A-Class',
      image:
        'https://www.topgear.com/sites/default/files/2023/03/1-Mercedes-A-Class.jpg',
      price: '$60/Day',
    },
  ];

  const [likedCars, setLikedCars] = useState([]);
  const toggleLike = index => {
    if (likedCars.includes(index)) {
      setLikedCars(likedCars.filter(item => item !== index));
    } else {
      setLikedCars([...likedCars, index]);
    }
  };

  const [isPickupModalVisible, setPickupModalVisible] = useState(false);
  const [isReturnModalVisible, setReturnModalVisible] = useState(false);
  const [selectedPickupDate, setSelectedPickupDate] = useState(new Date());
  const [selectedReturnDate, setSelectedReturnDate] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Başlangıçta bir gün sonrasını seçili olarak ayarla
  );

  const showPickupModal = () => {
    setPickupModalVisible(true);
  };

  const hidePickupModal = () => {
    setPickupModalVisible(false);
  };

  const showReturnModal = () => {
    setReturnModalVisible(true);
  };

  const hideReturnModal = () => {
    setReturnModalVisible(false);
  };

  const handlePickupDateConfirm = date => {
    setSelectedPickupDate(date);
    setSelectedReturnDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // Seçili tarihten bir gün sonrasını Return Date olarak ayarla
    hidePickupModal();
  };

  const handleReturnDateConfirm = date => {
    setSelectedReturnDate(date);
    hideReturnModal();
  };

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
          <View style={styles.dateArea}>
            <Text style={styles.dateAreaTitle}>Date & Time</Text>

            <View style={styles.row}>
              <DateTimePickerModal
                isVisible={isPickupModalVisible}
                mode="datetime"
                date={selectedPickupDate}
                onConfirm={handlePickupDateConfirm}
                onCancel={hidePickupModal}
                minimumDate={new Date()}
              />

              <DateTimePickerModal
                isVisible={isReturnModalVisible}
                mode="datetime"
                date={selectedReturnDate}
                onConfirm={handleReturnDateConfirm}
                onCancel={hideReturnModal}
                minimumDate={
                  new Date(selectedPickupDate.getTime() + 24 * 60 * 60 * 1000)
                }
              />

              <TouchableOpacity
                style={styles.detailArea}
                onPress={showPickupModal}>
                <Text style={styles.detailTitle}>Pickup Date</Text>

                <View
                  style={{
                    ...styles.row,
                    justifyContent: 'flex-start',
                    marginBottom: 5,
                  }}>
                  <Ionicons name="calendar-outline" color="#C80000" size={25} />
                  <Text style={styles.dateText}>
                    {selectedPickupDate.toLocaleDateString()}
                  </Text>
                </View>
                <View style={{...styles.row, justifyContent: 'flex-start'}}>
                  <Ionicons name="time-outline" color="#C80000" size={25} />
                  <Text style={styles.dateText}>
                    {selectedPickupDate.toLocaleTimeString('tr-TR', {
                      hour: '2-digit',
                      hour12: false,
                    })}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.detailArea}
                onPress={showReturnModal}>
                <Text style={styles.detailTitle}>Return Date</Text>
                <View
                  style={{
                    ...styles.row,
                    justifyContent: 'flex-start',
                    marginBottom: 5,
                  }}>
                  <Ionicons name="calendar-outline" color="#C80000" size={25} />
                  <Text style={styles.dateText}>
                    {selectedReturnDate.toLocaleDateString()}
                  </Text>
                </View>
                <View style={{...styles.row, justifyContent: 'flex-start'}}>
                  <Ionicons name="time-outline" color="#C80000" size={25} />
                  <Text style={styles.dateText}>
                    {selectedReturnDate.toLocaleTimeString('tr-TR', {
                      hour: '2-digit',
                      hour12: false,
                    })}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchText}>SEARCH</Text>
            </TouchableOpacity> */}
          </View>

          <Text style={styles.ourCarsText}>Our Cars</Text>

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

export default AllCars;

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
    fontFamily: 'GothamRounded-Medium',
    fontSize: 18,
    color: '#C80000',
    marginBottom: 10,
  },
  dateText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
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
    fontFamily: 'GothamRounded-Medium',
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
