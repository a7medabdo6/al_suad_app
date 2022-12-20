import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import FirstInput from '../Components/Inputs/FirstInput';
import BasicButton from '../Components/Buttons/BasicButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../consts/houses';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from '../consts/colors';
import {Center} from 'native-base';
import TextArea from '../Components/Inputs/TextArea';
const {width} = Dimensions.get('screen');
const Inquiry = ({navigation, route}) => {
  // const house = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <View style={style.detailsContainer}>
          <Text style={style.text}>Fill in the form </Text>
          <View style={style.bluebox}>
            <Text style={style.blueboxtext}>
              <Ionicons
                name="information-circle-outline"
                size={12}
                style={{marginHorizontal: 3}}
                color={COLORS.blue}
              />
              You have already sent an Inquiry: 14th of July
            </Text>
          </View>
          <FirstInput text="Name" />
          <FirstInput text="Email Address" />
          <FirstInput text="Mopile Phone" />
          <TextArea text="Description" />
          <BasicButton text="Inquiry" width={155} />

        </View>
      </ScrollView>
      <View></View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },

  detailsContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    //  position: 'absolute',
    // marginHorizontal:10,
    backgroundColor: COLORS.white,
    zIndex: 5,
    borderRadius: 25,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bluebox: {
    width: '85%',

    backgroundColor: COLORS.backgroundblue,
    borderRadius: 3,
    marginVertical: 8,
    paddingVertical: 3,
  },
  blueboxtext: {
    color: COLORS.blue,
    fontSize: 12,
    marginHorizontal: 3,
  },

  container: {
    // ...StyleSheet.absoluteFillObject,
    //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },

  text: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 18,
    // width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
});

export default Inquiry;
