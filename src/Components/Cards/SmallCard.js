import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
const SmallCard = ({img, title, dec, style, styleImg}) => {
  return (
    <View style={[styles.container, {...style}]}>
      <Image source={{uri: img}} style={[styles.img, {...styleImg}]} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.dec} numberOfLines={1}>
        {dec}
      </Text>
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: font.l,
    borderColor: COLORS.lightBorder,
    borderWidth: 1,
    width: 90,
    padding: font.m,
    marginLeft: font.l,
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.black,
    marginTop: font.s,
  },
  dec: {color: COLORS.lightGrey, fontSize: 12},
});
