import React, {useRef, useState, useEffect} from 'react';

import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {TabView, SceneMap} from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
import SCREEN from '../../../Layout';
import houses from '../../consts/houses';
import PaymentCard from '../../Components/Cards/paymentsCard';
import MaintenanceCard from '../../Components/Cards/MaintenanceCard';
import TouchableOpacityBtn from '../../Components/Buttons/TouchBtn';
import DocumentCard from '../../Components/Cards/DocumentCard';
import BottomSheet from '../../Components/Sheets/BottomSheet';
import {useNavigation} from '@react-navigation/native';
import NewBottomSheet from '../../Components/Sheets/NewBottomSheet';
import {useMaintianenceApi, usePaymentsForTenantApi} from '../../apis/Home';
import {useIsFocused} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import Spinner from '../../Components/Spinner';
const FirstRoute = () => {
  // console.log(userInfo, 'userInfo');
  const HomeDetailedData = useSelector(state => state.Home.Detailed);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          height: 650,
        }}>
        <View style={styles.firstbox}>
          <View style={styles.secondbox}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/bed.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{HomeDetailedData?.room_no}</Text>
                <Text style={styles.textGrey}>Rooms</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/bathroom.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{HomeDetailedData?.bathroom_no}</Text>
                <Text style={styles.textGrey}>Bath</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/stairs.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{HomeDetailedData?.stairs}</Text>
                <Text style={styles.textGrey}>Stairs</Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdbox}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/area.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{HomeDetailedData?.area}</Text>
                <Text style={styles.textGrey}>m2</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/bed.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>3</Text>
                <Text style={styles.textGrey}>Rooms</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacityBtn
          color={SCREEN.WHITE}
          text="View Plans"
          width={'90%'}
          style={{borderRadius: 10, paddingVertical: 12, marginVertical: 15}}
          textcolor={SCREEN.OREANGE}
          outline={SCREEN.OREANGE}
          type="basic"
          textSize={14}
          Icon={
            <Image
              style={styles.btnicon}
              source={require('../../assets/architect.png')}
            />
          }
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '90%',
          }}>
          <Image
            style={styles.fullmap}
            source={require('../../assets/fullmap.png')}
          />
          {HomeDetailedData?.description && (
            <>
              <Text style={styles.Description}>Description</Text>
              <Text style={styles.longDescription}>
                {HomeDetailedData?.description}
              </Text>
            </>
          )}

          {HomeDetailedData?.amenities_compile && arr?.length > 0 && (
            <>
              <Text style={styles.seeMOre}>See more</Text>

              <Text style={styles.Amenities}>Amenities</Text>
              <View style={styles.Amenitiesbox}>
                <View style={styles.Amenitiesinnerbox}>
                  <Image source={require('../../assets/png/ac.png')} />

                  <Text style={styles.longDescription}>Ac</Text>
                </View>
                <View style={{...styles.Amenitiesinnerbox}}>
                  <View style={{height: 35}}>
                    <Image source={require('../../assets/png/wifi.png')} />
                  </View>
                  <Text style={{...styles.longDescription}}>Wifi</Text>
                </View>
                <View style={styles.Amenitiesinnerbox}>
                  <Image source={require('../../assets/png/parking.png')} />

                  <Text style={styles.longDescription}>Parking</Text>
                </View>
                <View style={styles.Amenitiesinnerbox}>
                  <Image source={require('../../assets/png/gym.png')} />

                  <Text style={styles.longDescription}>Gym</Text>
                </View>
                <View style={styles.Amenitiesinnerbox}>
                  <Image source={require('../../assets/png/balcony.png')} />
                  <Text style={styles.longDescription}>Balcony</Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};
const SecondRoute = () => {
  const {mutate: MaintianenceApi, isLoading} = useMaintianenceApi();
  const IsFocused = useIsFocused();

  const userInfo = useSelector(state => state.userinfo.userInfo);
  const selectedProp = useSelector(state => state.MyProperties.selectedProp);
  const {Maintainence} = useSelector(state => state.Maintainence);
  const [MaintainenceSelceted, setMaintainenceSelceted] = useState({});

  // console.log(Maintainence, 'Maintainence');

  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const sheetRef = React.useRef(null);
  const handleOpenModal = () => {
    sheetRef.current.snapTo(0);
  };
  const handleCloseModal = () => {
    sheetRef.current.snapTo(2);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          height: 400,
        }}>
        <View style={styles.secbox}>
          <View style={styles.secboximage}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                style={styles.image}
                source={require('../../assets/man.jpg')}
              />
              <View style={styles.secboxtext}>
                <Text style={styles.name}>Salma Mohamed</Text>
                <View style={styles.codebox}>
                  <Text style={{color: SCREEN.DARKGREY}}>
                    <Ionicons name="star" size={16} color="gold" /> 5
                  </Text>
                </View>
              </View>
            </View>

            <Text style={{...styles.text, fontSize: 12}}>22/02/2033</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.dark}>
            Lorem ipsum dolor sit amet consectetur. Id erat blandit amet
            suspendisse sit orci montes.
          </Text>
        </View>
      </View>
    </>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '100%',
    //     display: 'flex',
    //   }}>
    //   {isLoading ? (
    //     <Spinner />
    //   ) : Maintainence && Maintainence.length > 0 ? (
    //     <FlatList
    //       snapToInterval={width - 20}
    //       showsHorizontalScrollIndicator={false}
    //       contentContainerStyle={{
    //         marginVertical: 10,
    //       }}
    //       vertical
    //       data={Maintainence}
    //       renderItem={({item}) => (
    //         <MaintenanceCard
    //           openModal={openModal}
    //           item={item}
    //           setOpenModal={setOpenModal}
    //           setMaintainenceSelceted={setMaintainenceSelceted}
    //           handleOpenModal={handleOpenModal}
    //         />
    //       )}
    //     />
    //   ) : (
    //     <Text style={{color: 'black', fontWeight: 'bold'}}>No Data</Text>
    //   )}

    //   {/* <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
    //     <BasicButton
    //       text="Create Request"
    //       color={COLORS.blue}
    //       width={150}
    //       onPress={() => navigation.push('CreateRequestScreen')}
    //       Icon={
    //         <MaterialCommunityIcons
    //           color={COLORS.white}
    //           size={18}
    //           name="plus-circle-outline"
    //         />
    //       }
    //     />
    //   </View> */}

    //   <View
    //     style={{position: 'absolute', bottom: 0, left: 0, right: 0, top: 0}}>
    //     <NewBottomSheet
    //       openModal={openModal}
    //       setOpenModal={setOpenModal}
    //       sheetRef={sheetRef}
    //       handleCloseModal={handleCloseModal}
    //       MaintainenceSelceted={MaintainenceSelceted}
    //     />
    //   </View>
    // </View>
  );
};

export default class TabViewExample extends React.Component {
  state = {
    index: this.props.index,
    routes: [
      {
        id: 0,
        key: 'first',
        icon: (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              Overview
            </Text>
          </View>
        ),
      },
      {
        id: 1,

        key: 'second',
        icon: (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.grey,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              Reviews
            </Text>
          </View>
        ),
      },
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text
                style={{
                  opacity,
                  borderBottomColor:
                    this.state.index == i ? COLORS.blue : 'unset',

                  borderBottomWidth: this.state.index == i ? 2 : 0,
                  color: 'blue',
                }}>
                <Text
                  style={{
                    color: 'blue',
                  }}>
                  {route.icon}
                </Text>
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        style={{height: this.props.index == 0 ? 650 : 100}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    // paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  firstbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  secondbox: {
    height: SCREEN.WIDTH * 0.775 * 0.185,
    width: SCREEN.WIDTH * 0.91 * 0.92,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SCREEN.RADIUS * 0.5,
  },
  thirdbox: {
    height: SCREEN.WIDTH * 0.775 * 0.185,
    width: (SCREEN.WIDTH * 0.91 * 0.92 * 2) / 3,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SCREEN.RADIUS * 0.5,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: SCREEN.WIDTH * 0.775 * 0.145 * 0.48,
    flexDirection: 'row',
    // overflow: 'hidden',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: SCREEN.GREY,
    marginHorizontal: 4,
  },
  text: {
    color: SCREEN.BLUE,
    fontSize: 12,
    fontWeight: 'bold',
  },
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
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    // height: SCREEN.WIDTH * 0.775 * 0.28,
    width: SCREEN.WIDTH * 0.91 * 0.92,
  },
  btnicon: {
    width: 20,
    height: 20,
  },
  fullmap: {
    width: '100%',
    height: 100,
  },
  seeMOre: {
    color: SCREEN.OREANGE,
    marginTop: 15,
    marginVertical: 25,
  },
  Description: {
    color: COLORS.dark,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  longDescription: {
    color: COLORS.dark,
    marginVertical: 5,
  },
  Amenities: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
    marginBottom: 10,
  },
  Amenitiesbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  Amenitiesinnerbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  secbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: SCREEN.MIDDLEGREY,
    borderWidth: 1,
    borderRadius: 10,
    width: SCREEN.WIDTH * 0.91 * 0.92,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    // backgroundColor: 'red',
  },
  secboximage: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // marginHorizontal: 20,
    width: '100%',
    // backgroundColor: 'blue',
  },
  secboxtext: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    // backgroundColor: 'white',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
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
  name: {
    color: COLORS.dark,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: SCREEN.MIDDLEGREY,
    borderRightColor: 'transparent',
    height: 5,
    borderWidth: 1,
    width: '100%',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    marginVertical: 15,
  },
  dark: {
    color: COLORS.dark,
  },
});
