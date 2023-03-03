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
import {TabView, SceneMap} from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
import SCREEN from '../../../Layout';
import houses from '../../consts/houses';
import PaymentCard from '../../Components/Cards/paymentsCard';
import MaintenanceCard from '../../Components/Cards/MaintenanceCard';
import BasicButton from '../../Components/Buttons/BasicButton';
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

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          height: '100%',
        }}>
        <View style={styles.firstbox}>
          <View style={styles.secondbox}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/bed.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>3</Text>
                <Text style={styles.textGrey}>Rooms</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/bed.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>3</Text>
                <Text style={styles.textGrey}>Rooms</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/stair.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>3</Text>
                <Text style={styles.textGrey}>Rooms</Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdbox}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/bed.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>3</Text>
                <Text style={styles.textGrey}>Rooms</Text>
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
        <BasicButton
          color={SCREEN.WHITE}
          text="View Plans"
          width={180}
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
        {/* <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}>
          <Image
            style={styles.fullmap}
            source={require('../../assets/fullmap.png')}
          />
          <Text>Description</Text>
        </View> */}
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
      }}>
      {isLoading ? (
        <Spinner />
      ) : Maintainence && Maintainence.length > 0 ? (
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 10,
          }}
          vertical
          data={Maintainence}
          renderItem={({item}) => (
            <MaintenanceCard
              openModal={openModal}
              item={item}
              setOpenModal={setOpenModal}
              setMaintainenceSelceted={setMaintainenceSelceted}
              handleOpenModal={handleOpenModal}
            />
          )}
        />
      ) : (
        <Text style={{color: 'black', fontWeight: 'bold'}}>No Data</Text>
      )}

      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <BasicButton
          text="Create Request"
          color={COLORS.blue}
          width={150}
          onPress={() => navigation.push('CreateRequestScreen')}
          Icon={
            <MaterialCommunityIcons
              color={COLORS.white}
              size={18}
              name="plus-circle-outline"
            />
          }
        />
      </View>

      <View
        style={{position: 'absolute', bottom: 0, left: 0, right: 0, top: 0}}>
        <NewBottomSheet
          openModal={openModal}
          setOpenModal={setOpenModal}
          sheetRef={sheetRef}
          handleCloseModal={handleCloseModal}
          MaintainenceSelceted={MaintainenceSelceted}
        />
      </View>
    </View>
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
    width: SCREEN.WIDTH * 0.91 * 0.92,
    height: 150,
  },
});
