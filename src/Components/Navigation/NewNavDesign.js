import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';
import SCREEN from '../../../Layout';
import {SvgUri} from 'react-native-svg';
const NewNavDesign = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../assets/backnav.png')}>
        <View style={styles.itemSearch}>
          <Image source={require('../../assets/Search.png')} />
        </View>
        <View style={styles.AllItems}>
          <View style={styles.item}>
            <Image source={require('../../assets/home.png')} />
            <Text style={styles.text}>Home</Text>
            <View style={{...styles.dot}}></View>
          </View>
          <View style={styles.item}>
            <Image source={require('../../assets/campass.png')} />
            <Text style={styles.textgrey}>Explore</Text>
            {/* <View style={{...styles.dot}}></View> */}
          </View>

          <View style={styles.item}>
            <Image source={require('../../assets/Heart.png')} />
            <Text style={styles.textgrey}>My Favourite</Text>
            {/* <View style={{...styles.dot}}></View> */}
          </View>
          <View style={styles.item}>
            <Image source={require('../../assets/more.png')} />
            <Text style={styles.textgrey}>More</Text>
            {/* <View style={{...styles.dot}}></View> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    width: SCREEN.WIDTH,

    bottom: 0,
    position: 'absolute',
  },
  text: {color: SCREEN.OREANGE},
  ImageBackground: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    height: 120,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  AllItems: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSearch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    bottom: 40,
  },
  dot: {
    padding: 2,
    backgroundColor: SCREEN.OREANGE,
    borderRadius: 50,
  },
  textgrey: {
    color: SCREEN.DARKGREY,
  },
});
export default NewNavDesign;
