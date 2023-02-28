import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import font from '../../consts/font';
const MediumCard = ({img, title, dec, style, styleImg}) => {
  return (
    <View style={styles.border}>
      <ImageBackground
        source={{uri: img}}
        style={[styles.container, {...style}]}>
        <View style={styles.transparent}>
          <View style={styles.overLay}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.dec} numberOfLines={1}>
              {dec}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MediumCard;

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.lightBorder,
    width: font.width * 0.36,
    height: 136,
    padding: font.m,
  },
  border: {borderRadius: font.m, overflow: 'hidden', marginLeft: font.m},
  img: {
    height: 136,
    width: font.width * 0.36,
    borderRadius: 8,
    position: 'absolute',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: font.s,
  },
  dec: {color: COLORS.white, fontSize: 12},
  transparent: {
    width: font.width * 0.36,
    height: 136,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  overLay: {position: 'absolute', bottom: font.m, left: font.m},
});
