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
  Linking,
} from 'react-native';
import SCREEN from '../../Layout';
import Contact from '../assets/svg/contact.svg';
import AnimatedCorner from '../Components/Buttons/AnimatedCorner';
import {useDispatch, useSelector} from 'react-redux';
import openMap from 'react-native-open-maps';
import VideoPlayer from '../Components/Video/index';
import Slider from '../Components/Slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../consts/houses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchableOpacityBtn from '../Components/Buttons/TouchBtn';

import {useNavigation} from '@react-navigation/native';
import BasicButton from '../Components/Buttons/BasicButton';
import COLORS from '../consts/colors';
import {Button} from 'react-native';
const {width} = Dimensions.get('screen');
import {setisAuth} from '../Store/Message/MessageSlice';
import ImageGallery from '../Components/Slider/ImageGallery';
import DetailScreenTab from '../Components/Tab/DetailScreenTab';
import NewBottomSheet from '../Components/Sheets/New_BottomSheet';
import Whatsapp from '../assets/svg/whatsapp.svg';
import Call from '../assets/svg/call.svg';
import Mail from '../assets/svg/mail.svg';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const HomeDetailedData = useSelector(state => state.Home.Detailed);
  const {userInfo} = useSelector(state => state.userinfo);
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  const [images_urls, setimages_urls] = useState([]);
  const [videoId, setvideoId] = useState('');

  // useEffect(() => {
  //   var strarr = HomeDetailedData?.amenities_compile.split(',');
  //   var IconsArr = HomeDetailedData?.amenities_icons_compile.split(',');
  //   var newArr = [];
  //   for (let i = 0; i < strarr?.length; i++) {
  //     newArr.push({name: strarr[i], icon: IconsArr[i]});
  //   }
  //   setArr(newArr);
  //   if (HomeDetailedData?.images_urls) {
  //     var images = HomeDetailedData?.images_urls.split(',');
  //     setimages_urls(images);
  //   }
  //   if (HomeDetailedData?.video_url) {
  //     var video_id = HomeDetailedData?.video_url.split('v=')[1];
  //     var ampersandPosition = video_id.indexOf('&');
  //     if (ampersandPosition != -1) {
  //       video_id = video_id.substring(0, ampersandPosition);
  //     }
  //     setvideoId(video_id);
  //   }
  //   return () => {};
  // }, [HomeDetailedData]);
  const HandleMap = () => {
    // openMap({latitude: 37.865101, longitude: -119.53833});
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${37.865101},${-119.53833}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <StatusBar translucent backgroundColor="transparent" />

      <ScrollView
        // style={{position: 'absolute', top: -20}}
        showsVerticalScrollIndicator={false}>
        {/* House image */}
        <ImageGallery />
        {/* <View style={style.backgroundImageContainer}>
          {images_urls?.length > 0 ? (
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
                />
              </View>
            </Pressable>
            <View style={style.twoIcon}>
              

              <View style={style.headerBtn}>
                <Ionicons name="heart-outline" style={style.icon} size={18} />
              </View>
            </View>
          </View>
        </View> */}

        <View style={style.detailsContainer}>
          <View style={style.greyBox}>
            <Text style={style.header}>Flat/SNA - 101 Block B view</Text>
            <View style={style.codebox}>
              <Text style={style.code}>Code: SNA-101</Text>
              <Text style={{marginHorizontal: 15, color: SCREEN.DARKGREY}}>
                <Ionicons name="star" size={16} color="gold" /> 5
              </Text>
            </View>
            <View style={style.lastbox}>
              <Text style={{...style.fontextralarge, color: SCREEN.OREANGE}}>
                12000.00 AED
              </Text>
              <Text
                style={{
                  ...style.textGrey,
                  marginHorizontal: 10,
                  ...style.fontlarge,
                }}>
                Annually
              </Text>
              <Text style={{...style.Residential, color: SCREEN.OREANGE}}>
                Residential
              </Text>
            </View>
          </View>
          <View style={{width: '100%'}}>
            <DetailScreenTab index={0} />
            <View style={style.flexbox}>
              <NewBottomSheet
                Height={200}
                Content={
                  <View style={{...style.flexboxcolumn, width: '90%'}}>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '90%',
                      }}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Customer Service
                      </Text>
                      <View style={style.line} />
                    </View>
                    <View style={{...style.flexbox, width: '100%'}}>
                      <View style={style.whatsapp}>
                        <View>
                          <Whatsapp />
                        </View>
                        <Text style={{color: 'black'}}>whatsapp</Text>
                      </View>
                      <View style={style.whatsapp}>
                        <View>
                          <Call />
                        </View>
                        <Text style={{color: 'black'}}>Phone call</Text>
                      </View>
                      <View style={style.whatsapp}>
                        <View>
                          <Mail />
                        </View>
                        <Text style={{color: 'black'}}>Mail</Text>
                      </View>
                    </View>
                  </View>
                }
              />

              <TouchableOpacityBtn
                color={SCREEN.OREANGE}
                text="Call us"
                width={'45%'}
                style={{
                  borderRadius: 10,
                  paddingVertical: 12,
                  marginVertical: 15,
                }}
                textcolor={SCREEN.WHITE}
                // outline={SCREEN.OREANGE}
                onPress={() => navigation.push('login')}
                type="basic"
                textSize={14}
                Icon={<Contact />}
              />
            </View>
          </View>
          <View style={{display: 'none'}}>
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
          <View style={{display: 'none'}}>
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

          <View style={{display: 'none'}}>
            <View style={{marginTop: 10}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View>
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
                    style={{
                      fontWeight: '500',
                      color: COLORS.grey,
                      fontSize: 14,
                    }}>
                    {HomeDetailedData?.building_id?.[1]} -
                    {HomeDetailedData?.state_id?.[1]}
                  </Text>
                </View>
                <MaterialIcons
                  name="directions"
                  onPress={HandleMap}
                  size={40}
                  color={COLORS.blue}
                />
              </View>
            </View>
            <View style={style.line}></View>
          </View>
          <View style={{display: 'none'}}>
            {videoId && <VideoPlayer videoId={videoId} />}
          </View>
          <View>
            <View style={{marginTop: 10, display: 'none'}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                {HomeDetailedData?.amenities_compile && arr?.length > 0 && (
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.dark,
                      marginBottom: 10,
                    }}>
                    Amenities
                  </Text>
                )}

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
      <View style={{display: 'none'}}>
        <BasicButton
          text="Request"
          width={150}
          // onPress={() =>
          //   userInfo?.uid
          //     ? navigation.push('Inquiry', {id: HomeDetailedData?.id})
          //     : dispatch(setisAuth(false))
          // }
          style={{bottom: 60, width: 110, borderRadius: 100}}
          styleText={{fontSize: 14}}
        />
        {/* <AnimatedCorner /> */}
        {/* <MaterialIcons name="support-agent" color={COLORS.white} size={40} /> */}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  line: {
    borderBottomColor: SCREEN.MIDDLEGREY,
    borderRightColor: 'transparent',
    height: 5,
    borderWidth: 1,
    width: '100%',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    marginVertical: 5,
  },
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
    // marginTop: 40,
    //  position: 'absolute',
    // top: -80,
    // marginHorizontal:10,
    backgroundColor: COLORS.white,
    zIndex: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
  greyBox: {
    backgroundColor: '#F9F9F9',
    width: SCREEN.WIDTH * 0.92,
    height: SCREEN.WIDTH * 0.92 * 0.34,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 10,
  },
  codebox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  code: {color: SCREEN.DARKGREY},
  header: {
    color: 'black',
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
  lastbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  Residential: {
    paddingHorizontal: 8,
    backgroundColor: SCREEN.GREY,
    borderRadius: 5,
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  flexbox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
  },
  flexboxcolumn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  whatsapp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
