import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SCREEN from '../../../Layout';
const NewHomeCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../../assets/card_image.png')}
        />
      </View>
      <View style={styles.middlebox}>
        <Text style={{...styles.text, ...styles.fontlarge}}>
          Flat/SNA - 101 Block B view
        </Text>
        <View
          style={{
            ...styles.text,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              ...styles.text,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '70%',
              flexDirection: 'row',
            }}>
            <Text style={{...styles.text}}>Code: SNA-101</Text>

            <Text style={styles.textminy}>Residential</Text>
          </View>
        </View>
        <Text style={{...styles.fontlarge, color: 'black'}}>
          Flat No.12 - 55 B Street - Dubai
        </Text>
      </View>
      <View style={styles.secondbox}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
      </View>
      <View style={styles.lastbox}>
        <Text style={{...styles.fontextralarge, color: SCREEN.OREANGE}}>
          12000.00 AED
        </Text>
        <Text
          style={{
            ...styles.textGrey,
            marginHorizontal: 10,
            ...styles.fontlarge,
          }}>
          Annually
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: SCREEN.WIDTH * 0.775,
    width: SCREEN.WIDTH * 0.76,
    backgroundColor: SCREEN.WHITE,
    borderColor: SCREEN.GREY,
    borderRadius: SCREEN.RADIUS,
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 5,
  },
  box: {
    height: SCREEN.WIDTH * 0.775 * 0.365,
    width: SCREEN.WIDTH * 0.76 * 0.92,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    borderRadius: SCREEN.RADIUS - 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SCREEN.RADIUS - 4,
  },
  secondbox: {
    height: SCREEN.WIDTH * 0.775 * 0.185,
    width: SCREEN.WIDTH * 0.76 * 0.92,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: SCREEN.GREY,
    borderRadius: SCREEN.RADIUS * 0.5,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN.WIDTH * 0.775 * 0.145 * 0.48,
    // overflow: 'hidden',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: SCREEN.GREY,
  },
  text: {
    color: SCREEN.BLUE,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textminy: {
    color: SCREEN.BLUE,
    fontSize: 10,
    backgroundColor: SCREEN.GREY,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  fontlarge: {
    fontSize: 14,
  },
  fontextralarge: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textGrey: {
    color: SCREEN.DARKGREY,
    fontSize: 10,
    marginHorizontal: 2,
  },
  middlebox: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    height: SCREEN.WIDTH * 0.775 * 0.28,
    width: SCREEN.WIDTH * 0.76 * 0.92,
  },
  lastbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
});
export default NewHomeCard;
