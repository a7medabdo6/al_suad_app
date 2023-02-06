import React, {useEffect, useState} from 'react';
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
  Pressable,
} from 'react-native';
import AnimatedCorner from '../Components/Buttons/AnimatedCorner';
import {useDispatch, useSelector} from 'react-redux';
import openMap from 'react-native-open-maps';
import VideoPlayer from '../Components/Video/index';
import Slider from '../Components/Slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../consts/houses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import COLORS from '../consts/colors';
import {Button} from 'react-native';
const {width} = Dimensions.get('screen');
const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const HomeDetailedData = useSelector(state => state.Home.Detailed);
  const [arr, setArr] = useState([]);
  const [images_urls, setimages_urls] = useState([]);
  const [videoId, setvideoId] = useState('');

  useEffect(() => {
    var strarr = HomeDetailedData?.amenities_compile.split(',');
    var IconsArr = HomeDetailedData?.amenities_icons_compile.split(',');
    var newArr = [];
    for (let i = 0; i < strarr.length; i++) {
      newArr.push({name: strarr[i], icon: IconsArr[i]});
    }
    setArr(newArr);
    if (HomeDetailedData?.images_urls) {
      var images = HomeDetailedData?.images_urls.split(',');
      setimages_urls(images);
    }
    if (HomeDetailedData?.video_url) {
      var video_id = HomeDetailedData?.video_url.split('v=')[1];
      var ampersandPosition = video_id.indexOf('&');
      if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
      setvideoId(video_id);
    }
    return () => {};
  }, [HomeDetailedData]);
  const HandleMap = () => {
    openMap({latitude: 37.865101, longitude: -119.53833});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}
        <StatusBar barStyle="light-content" backgroundColor="transparent" />

        <View style={style.backgroundImageContainer}>
          {images_urls.length > 0 ? (
            <View style={{height: '100%'}}>
              <Slider Data={images_urls} />
            </View>
          ) : (
            <Image
              source={
                house.image_128
                  ? {uri: `data:image/jpeg;base64,${house.image_128}`}
                  : require('../assets/unknown.jpg')
              }
              style={style.cardImage}
            />
          )}

          <View style={style.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <View style={style.headerBtn}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={20}
                  color={COLORS.grey}
                  // onPress={navigation.goBack}
                />
              </View>
            </Pressable>
            <View style={style.twoIcon}>
              <Pressable onPress={() => navigation.push('Inquiry', {id: '1'})}>
                <View style={style.headerBtn}>
                  <Ionicons name="push-outline" style={style.icon} size={18} />
                </View>
              </Pressable>

              <View style={style.headerBtn}>
                <Ionicons name="heart-outline" style={style.icon} size={18} />
              </View>
            </View>
          </View>
        </View>

        <View style={style.detailsContainer}>
          <View style={style.dashline}></View>
          <View>
            <View style={{marginTop: 10}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: '500', color: COLORS.dark}}>
                  Apartment
                </Text>
                <Text
                  style={{fontWeight: '500', color: COLORS.grey, fontSize: 12}}>
                  Ref No. {HomeDetailedData?.code}
                </Text>
              </View>

              <Text
                style={{
                  color: COLORS.blue,
                  fontSize: 14,
                  marginTop: 5,
                  fontWeight: 'bold',
                }}>
                {HomeDetailedData?.rent_value}
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '500',
                }}>
                {HomeDetailedData?.building_id?.[1]} -
                {HomeDetailedData?.state_id?.[1]}
              </Text>
              {/* Facilities container */}
              <View style={{flexDirection: 'column'}}>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={style.facility}>
                    <Ionicons
                      name="bed-outline"
                      size={18}
                      color={COLORS.dark}
                    />
                    <Text style={style.facilityText}>
                      {' '}
                      {HomeDetailedData?.room_no} Rooms
                    </Text>
                  </View>
                  <View style={style.facility}>
                    <Icon
                      name="bathtub-outline"
                      size={18}
                      color={COLORS.dark}
                    />
                    <Text style={style.facilityText}>
                      {' '}
                      {HomeDetailedData?.bathroom_no} Bathrooms
                    </Text>
                  </View>
                  <View style={style.facility}>
                    <Ionicons
                      name="md-repeat-sharp"
                      size={18}
                      color={COLORS.dark}
                    />
                    <Text style={style.facilityText}>
                      {' '}
                      {HomeDetailedData?.area} ft2
                    </Text>
                  </View>
                </View>
                {/* <View style={style.bluebox}>
                  <Text style={style.blueboxtext}>
                    <Ionicons
                      name="information-circle-outline"
                      size={12}
                      style={{marginHorizontal: 3}}
                      color={COLORS.blue}
                    />
                    You have already sent an Inquiry: 14th of July
                  </Text>
                </View> */}
              </View>
            </View>
            <View style={style.line}></View>
          </View>
          {/* Description */}
          <View>
            <View style={{marginTop: 10}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: COLORS.dark,
                    marginBottom: 10,
                  }}>
                  Description
                </Text>
                <Text
                  style={{fontWeight: '500', color: COLORS.grey, fontSize: 14}}>
                  Azco Real Estate is pleased to offer this magnificent Studio
                  Apartment in Tower 108. Property is spread over 449.50 sqft /
                  41.76 sqr.mtr and has a modern outstanding finishing.
                </Text>
              </View>
            </View>
            <View style={style.line}></View>
          </View>
          {/* Location */}

          <View>
            <View style={{marginTop: 10}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: COLORS.dark,
                    marginBottom: 10,
                  }}>
                  Location
                </Text>
                <Text
                  style={{fontWeight: '500', color: COLORS.grey, fontSize: 14}}>
                  {HomeDetailedData?.building_id?.[1]} -
                  {HomeDetailedData?.state_id?.[1]}
                </Text>
                <Pressable onPress={() => HandleMap()}>
                  <View style={style.container}>
                    {/*Render our MapView*/}
                    <Button
                      color={COLORS.red}
                      onPress={HandleMap}
                      title="Click To Open The Location 🗺"
                    />
                    {/* <MapView
                      style={style.map}
                      //specify our coordinates.
                      initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    /> */}
                  </View>
                </Pressable>
              </View>
            </View>
            <View style={style.line}></View>
          </View>
          <View>{videoId && <VideoPlayer videoId={videoId} />}</View>
          <View>
            <View style={{marginTop: 10}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: COLORS.dark,
                    marginBottom: 10,
                  }}>
                  Amenities
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '90%',
                    flexWrap: 'wrap',
                    marginVertical: 5,
                  }}>
                  {HomeDetailedData?.amenities_compile &&
                    arr?.length > 0 &&
                    arr.map(e => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            width: '50%',
                            marginVertical: 10,
                          }}>
                          <Image
                            size={20}
                            style={{width: 30, height: 20}}
                            color={COLORS.dark}
                            source={{uri: e.icon}}
                          />
                          <Text
                            style={{
                              color: COLORS.dark,
                              fontSize: 16,
                              marginHorizontal: 4,
                            }}>
                            {e.name}
                            {console.log(e, 'eeeeeeee')}
                          </Text>
                        </View>
                      );
                    })}
                </View>

                {/* <View>
                  <Text
                    style={{color: COLORS.blue, fontSize: 16, marginTop: 20}}>
                    Show all 17 amenities
                  </Text>
                </View> */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <AnimatedCorner />
        {/* <MaterialIcons name="support-agent" color={COLORS.white} size={40} /> */}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    // marginHorizontal: 20,
    // marginTop: 20,
    alignItems: 'center',
    height: 350,
    zIndex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,

    zIndex: 55555,
    position: 'absolute',
    display: 'flex',
    width: '100%',
    left: 0,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
    //  position: 'absolute',
    top: -80,
    // marginHorizontal:10,
    backgroundColor: COLORS.white,
    zIndex: 5,
    borderRadius: 25,
    paddingTop: 20,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
  twoIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 8,
    zIndex: 55555,
    position: 'absolute',
    display: 'flex',
    right: 0,
    top: 30,
  },
  icon: {
    color: COLORS.grey,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginHorizontal: 3,
    fontWeight: 600,
    fontSize: 18,
  },

  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.dark, fontSize: 12},
  line: {
    borderBottomColor: COLORS.line,
    // borderColor: 'white',
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
    // height: 10,
  },
  dashline: {
    // borderBottomColor: 'red',
    width: 50,
    height: 2,
    color: '#DCDCDC',
    borderWidth: 1.5,
    backgroundColor: '#DCDCDC',
    opacity: 0.6,
    borderRadius: 3,
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  allIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 5,
    width: '100%',
  },
  allIconflex: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  twoIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  icon: {
    color: COLORS.grey,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 3,
    fontWeight: 600,
    fontSize: 18,
  },
  bluebox: {
    width: '90%',

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
  callSupport: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  callSupportIcon: {
    backgroundColor: COLORS.red,
    padding: 8,
    borderRadius: 50,
  },

  container: {
    height: 50, // 400,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DetailsScreen;
