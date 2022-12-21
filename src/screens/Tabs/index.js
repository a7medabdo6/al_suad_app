import * as React from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
import houses from '../../consts/houses';
import PaymentCard from '../../Components/Cards/paymentsCard';
import MaintenanceCard from '../../Components/Cards/MaintenanceCard';

import DocumentCard from '../../Components/Cards/DocumentCard';

const FirstRoute = () => (
  <FlatList
    snapToInterval={width - 20}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{marginVertical: 10, marginHorizontal: 10}}
    vertical
    data={houses}
    renderItem={({item}) => <PaymentCard />}
  />
);
const SecondRoute = () => (
  <FlatList
    snapToInterval={width - 20}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{marginVertical: 10, marginHorizontal: 10}}
    vertical
    data={houses}
    renderItem={({item}) => <MaintenanceCard />}
  />
);
const ThirdRoute = () => (
  <FlatList
    snapToInterval={width - 20}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{marginVertical: 10, marginHorizontal: 10}}
    vertical
    data={houses}
    renderItem={({item}) => <DocumentCard />}
  />
);

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
            <MaterialCommunityIcons
              color={COLORS.blue}
              size={18}
              name="credit-card-outline"
            />
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              Payments
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
            <MaterialCommunityIcons
              color={COLORS.blue}
              size={18}
              name="hammer-screwdriver"
            />
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              Maintenance
            </Text>
          </View>
        ),
      },
      {
        id: 2,

        key: 'third',
        icon: (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              color={COLORS.blue}
              size={18}
              name="file-document-multiple-outline"
            />
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              Documents
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
          {
            console.log('///////');

            console.log(opacity.outputRange);
          }
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
    third: ThirdRoute,
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
