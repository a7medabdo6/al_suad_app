import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SCREEN from '../../../Layout';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const NewHomeCard = ({data, horizontal, isFav = false}) => {
  return (
    <View
      style={[
        styles.container,
        {width: horizontal ? SCREEN.WIDTH * 0.76 : SCREEN.WIDTH * 0.9},
      ]}>
      <View
        style={[
          styles.box,
          {
            width: horizontal
              ? SCREEN.WIDTH * 0.76 * 0.92
              : SCREEN.WIDTH * 0.9 * 0.92,
          },
        ]}>
        <Image
          style={styles.image}
          source={require('../../assets/card_image.png')}
        />
      </View>
      <View style={styles.middlebox}>
        <Text
          style={{
            ...styles.fontlarge,
            color: 'black',
            fontWeight: '700',
            marginTop: 10,
          }}>
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
            <Text style={{...styles.text, marginTop: 5}}>Code: SNA-101</Text>

            <Text style={[styles.textminy, {marginTop: 5}]}>Residential</Text>
          </View>
        </View>
        <Text style={{...styles.fontlarge, color: 'black', marginTop: 5}}>
          Flat No.12 - 55 B Street - Dubai
        </Text>
      </View>
      <View
        style={[
          styles.secondbox,
          {
            width: horizontal
              ? SCREEN.WIDTH * 0.76 * 0.92
              : SCREEN.WIDTH * 0.9 * 0.92,
          },
        ]}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.smallText}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.smallText}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.smallText}>3</Text>
            <Text style={styles.textGrey}>Rooms</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/bed.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.smallText}>3</Text>
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

      <View
        style={[
          styles.overView,
          {
            width: horizontal
              ? SCREEN.WIDTH * 0.71 * 0.92
              : SCREEN.WIDTH * 0.85 * 0.92,
          },
        ]}>
        <View style={styles.lightColorStar}>
          <Image source={require('../../assets/png/star.png')} />
          <Text style={styles.space}>{data?.rate}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.lightColor}>
            <Entypo name="share-alternative" size={14} />
          </View>
          <View style={[styles.lightColor, {marginHorizontal: 5}]}>
            {isFav ? (
              <EvilIcons name="trash" size={24} color={COLORS.error} />
            ) : (
              <AntDesign name="hearto" size={16} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // height: SCREEN.WIDTH * 0.775,
    alignSelf: 'center',
    backgroundColor: SCREEN.WHITE,
    borderColor: COLORS.bottomBorder,
    borderRadius: SCREEN.RADIUS,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
  },
  box: {
    height: SCREEN.WIDTH * 0.775 * 0.365,
    display: 'flex',
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

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: SCREEN.GREY,
    borderRadius: SCREEN.RADIUS * 0.5,
    marginTop: 10,
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
    fontWeight: '700',
  },
  smallText: {fontSize: 9, color: SCREEN.BLUE},
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
  },
  lastbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  overView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,

    left: 15,
  },
  lightColorStar: {
    height: 24,
    width: 37,
    borderRadius: 8,
    backgroundColor: COLORS.tranparentWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightColor: {
    height: 32,
    width: 32,
    borderRadius: 8,
    backgroundColor: COLORS.tranparentWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {alignItems: 'center', flexDirection: 'row'},
});
export default NewHomeCard;
