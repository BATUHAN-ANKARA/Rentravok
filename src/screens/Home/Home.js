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
import BestOffer from '../../../assets/Svg/BestOffer';
import HeaderLogo from '../../../assets/Svg/HeaderLogo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Home = ({navigation}) => {
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
        <View style={styles.headerButton}></View>
        <HeaderLogo />
        <View style={styles.headerButton}></View>
      </View>

      <TouchableOpacity style={styles.whatsapp}>
        <Ionicons name="logo-whatsapp" size={45} color="#fff" />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: 20}}>
        <View style={styles.imgArea}>
          <Image
            source={require('../../../assets/Images/cabrio.jpg')}
            style={styles.img}
          />
        </View>

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
                minimumDate={new Date(selectedPickupDate.getTime() + 24 * 60 * 60 * 1000)}
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

            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchText}>SEARCH</Text>
            </TouchableOpacity>
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

          <TouchableOpacity
            onPress={() => navigation.navigate('AllCars')}
            style={styles.moreButton}>
            <Text style={styles.moreButtonText}>View More Cars</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CarDetail')}
            style={styles.bestOfferCard}>
            <Text style={styles.bestOfferText}>BEST OFFER</Text>
            <Text style={styles.bestOfferText}>OF THE WEEK</Text>
            <BestOffer />
          </TouchableOpacity>

          <View style={styles.aboutUsCell}>
            <View style={styles.iconArea}>
              <Ionicons name="people" size={40} color="#C80000" />
            </View>
            <View style={styles.textArea}>
              <Text style={styles.aboutUsTitle}>We’re got your back</Text>
              <Text style={styles.aboutUsText}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries
              </Text>
            </View>
          </View>

          <View style={styles.aboutUsCell}>
            <View style={styles.iconArea}>
              <Ionicons name="library" size={40} color="#C80000" />
            </View>
            <View style={styles.textArea}>
              <Text style={styles.aboutUsTitle}>Endless options</Text>
              <Text style={styles.aboutUsText}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries
              </Text>
            </View>
          </View>

          <View style={styles.aboutUsCell}>
            <View style={styles.iconArea}>
              <Ionicons name="lock-closed" size={40} color="#C80000" />
            </View>

            <View style={styles.textArea}>
              <Text style={styles.aboutUsTitle}>Drive Confidently</Text>
              <Text style={styles.aboutUsText}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  whatsapp: {
    width: 70,
    height: 70,
    backgroundColor: '#128C7E',
    position: 'absolute',
    zIndex: 9,
    bottom: 20,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
});
