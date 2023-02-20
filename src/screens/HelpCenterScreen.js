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
} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ScreenWidth = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Accordian from '../Components/Accordian';
import HelpCenterCard from '../Components/Accordian/HelpCenterCard';
import {useSelector} from 'react-redux';
const FirstRoute = () => {
  //   useEffect(() => {

  //     return () => {};
  //   }, []);

  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            display: 'flex',
          }}>
          <View>
            <Accordian
              title="First Header"
              body="lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem 
            loremlorem lorem loremlorem lorem loremlorem lorem lorem
            lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"
            />
            <Accordian
              title="First Header"
              body="lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem 
            loremlorem lorem loremlorem lorem loremlorem lorem lorem
            lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"
            />
            <Accordian
              title="First Header"
              body="lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem 
            loremlorem lorem loremlorem lorem loremlorem lorem lorem
            lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const SecondRoute = () => {
  const {HelpCenter} = useSelector(state => state.HelpCenter);
  // console.log(HelpCenter?.company_id?.[0].about_us, 'HelpCenter');

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        {HelpCenter?.company_id?.[0].customer_service && (
          <HelpCenterCard
            text="Custome Service"
            icon={
              <AntDesign
                style={{fontWeight: 'bold', marginRight: 10}}
                name="customerservice"
                color={COLORS.red}
                size={22}
              />
            }
          />
        )}
        {HelpCenter?.company_id?.[0].whatsapp && (
          <HelpCenterCard
            value={HelpCenter?.company_id?.[0].whatsapp}
            text="whatsapp"
            icon={
              <FontAwesome
                style={{fontWeight: 'bold', marginRight: 10}}
                name="whatsapp"
                color={COLORS.red}
                size={22}
              />
            }
          />
        )}
        {HelpCenter?.company_id?.[0].facebook && (
          <HelpCenterCard
            value={HelpCenter?.company_id?.[0].facebook}
            text="facebook"
            icon={
              <FontAwesome
                style={{fontWeight: 'bold', marginRight: 10}}
                name="facebook"
                color={COLORS.red}
                size={22}
              />
            }
          />
        )}
        {HelpCenter?.company_id?.[0].twitter && (
          <HelpCenterCard
            value={HelpCenter?.company_id?.[0].twitter}
            text="twitter"
            icon={
              <FontAwesome
                style={{fontWeight: 'bold', marginRight: 10}}
                name="twitter"
                color={COLORS.red}
                size={22}
              />
            }
          />
        )}
        {HelpCenter?.company_id?.[0].instagram && (
          <HelpCenterCard
            text="instagram"
            value={HelpCenter?.company_id?.[0].instagram}
            icon={
              <FontAwesome
                style={{fontWeight: 'bold', marginRight: 10}}
                name="instagram"
                color={COLORS.red}
                size={22}
              />
            }
          />
        )}
      </View>
    </ScrollView>
  );
};

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
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
              FAQ
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
                color: COLORS.dark,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              Contact Us
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
                }}>
                <Text>
                  {route.icon}
                  {route.title}
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
});
