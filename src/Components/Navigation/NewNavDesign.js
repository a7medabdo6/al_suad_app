import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SCREEN from '../../../Layout';
import {SvgUri} from 'react-native-svg';
import Compass from '../../assets/svg/compass.svg';
import Compass2 from '../../assets/svg/compass2.svg';
import Home from '../../assets/svg/home.svg';
import Home2 from '../../assets/svg/home2.svg';
import More from '../../assets/svg/more.svg';
import More2 from '../../assets/svg/More2.svg';
const NewNavDesign = ({navigation, index}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../assets/backnav.png')}>
        <View style={styles.itemSearch}>
          <Image source={require('../../assets/Search.png')} />
        </View>
        <View style={styles.AllItems}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.push('Main')}>
            {/* <Image source={require('../../assets/home.png')} /> */}

            {index == 0 ? <Home2 /> : <Home />}
            <Text style={index == 0 ? styles.text : styles.textgrey}>Home</Text>
            {index == 0 && <View style={{...styles.dot}}></View>}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.push('Explore')}
            style={styles.item}>
            {/* <Image source={require('../../assets/campass.png')} /> */}
            {index == 1 ? <Compass2 /> : <Compass />}
            <Text style={index == 1 ? styles.text : styles.textgrey}>
              Explore
            </Text>
            {index == 1 && <View style={{...styles.dot}}></View>}
          </TouchableOpacity>

          <View style={styles.item}>
            <Image source={require('../../assets/Heart.png')} />
            <Text style={styles.textgrey}>My Favourite</Text>
            {/* <View style={{...styles.dot}}></View> */}
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('Settings')}
            style={styles.item}>
            {index == 4 ? <More /> : <More2 />}
            <Text style={index == 4 ? styles.text : styles.textgrey}>More</Text>
            {index == 4 && <View style={{...styles.dot}}></View>}
          </TouchableOpacity>
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
