import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
import Star from '../../assets/svg/star.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const MediumTwoCardH = ({data, style, styleImg}) => {
  return (
    <View style={[styles.container, {...style}]}>
      <Image source={{uri: data.image}} style={[styles.img, {...styleImg}]} />
      <Text style={styles.title} numberOfLines={1}>
        {data.title}
      </Text>
      <Text style={styles.dec} numberOfLines={1}>
        {data.dec}
      </Text>
      <View style={styles.overView}>
        <View style={styles.lightColorStar}>
          <Star />
          <Text style={styles.space}>{data.rate}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.lightColor}>
            <Entypo name="share-alternative" size={14} />
          </View>
          <View style={[styles.lightColor, {marginHorizontal: 5}]}>
            <AntDesign name="hearto" size={16} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MediumTwoCardH;

const styles = StyleSheet.create({
  container: {
    borderRadius: font.l,
    borderColor: COLORS.lightBorder,
    borderWidth: 1,
    width: font.width * 0.45,
    padding: font.m,
    marginLeft: font.l,
    overflow: 'hidden',
  },
  img: {
    height: 125,
    width: font.width * 0.39,
    borderRadius: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.black,
    marginTop: font.s,
  },
  dec: {color: COLORS.blue, fontSize: 12, fontWeight: '700'},
  space: {marginHorizontal: 2},
  overView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
    width: font.width * 0.38,
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
