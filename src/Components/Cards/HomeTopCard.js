import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import SCREEN from '../../../Layout';
import {ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import FirstInput from '../Inputs/FirstInput';
const TopCard = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const navigation = useNavigation();
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require('../../assets/city.png')}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#18212C',
          opacity: 0.5,
          zIndex: 1,
          position: 'absolute',
        }}></View>
      <View style={styles.outerbox}>
        <View style={styles.box}>
          <View style={styles.innerbox}>
            <Text style={styles.textGrey}>Welcome back,</Text>
            <Text style={styles.text}>Mostafa Mohamed</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push('Navigation')}>
            <Image
              style={styles.image}
              source={require('../../assets/noty.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginLeft: -50,
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              // backgroundColor: 'red',
            }}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  marginRight: 15,
                  color: SCREEN.OREANGE,
                  fontSize: 26,
                  textAlign: 'left',
                  marginRight: 5,
                  fontWeight: 'bold',
                }}>
                Find
              </Text>
              <Text
                style={{
                  marginRight: 15,
                  color: SCREEN.OREANGE,
                  ...styles.fontlarge,
                }}>
                Your Perfect
              </Text>
            </View>

            <Text style={styles.fontlarge}> Place</Text>
          </View>
        </View>
        <View style={styles.searchbox}>
          <FirstInput
            text="Search by Name or Ref No. "
            Icon={
              <Feather
                name="search"
                style={{marginLeft: 5}}
                color={SCREEN.DARKGREY}
                size={20}
              />
            }
            width={130}
            height={42}
          />
          <View style={styles.orangeboxmain}>
            <TouchableOpacity>
              <View style={styles.orangebox}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={require('../../assets/filter.png')}
                />
                {/* <Entypo name="chevron-right" color={'white'} size={30} /> */}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.orangeboxmain}>
            <TouchableOpacity>
              <View style={styles.orangebox}>
                <Image
                  style={{height: '110%', width: '110%'}}
                  source={require('../../assets/map.png')}
                />
                {/* <Entypo name="chevron-right" color={'white'} size={30} /> */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: SCREEN.WIDTH * 0.81,
    width: SCREEN.WIDTH,
    backgroundColor: 'blue',
    position: 'relative',
    marginBottom: 50,
  },
  outerbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    width: '90%',
    zIndex: 55,
    // height: '100%',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,

    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: SCREEN.WHITE,
    color: SCREEN.DARKGREY,
  },
  innerbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
  },

  text: {
    color: SCREEN.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  textminy: {
    color: SCREEN.BLUE,
    fontSize: 10,
    backgroundColor: SCREEN.GREY,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  orangebox: {
    height: 45,
    width: 45,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeboxmain: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  fontlarge: {
    fontSize: 26,
    color: SCREEN.WHITE,
    textAlign: 'left',
    // marginLeft: -25,
    fontWeight: 'bold',
  },
  fontextralarge: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textGrey: {
    color: SCREEN.MIDDLEGREY,
    fontSize: 15,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  searchbox: {
    position: 'absolute',
    top: '115%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%',
  },
});
export default TopCard;
