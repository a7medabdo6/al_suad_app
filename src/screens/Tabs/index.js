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
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
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
  const userInfo = useSelector(state => state.userinfo.userInfo);
  const selectedProp = useSelector(state => state.MyProperties.selectedProp);
  const {mutate: PaymentsForTenantApi, isLoading} = usePaymentsForTenantApi();
  const {Payments} = useSelector(state => state.Payments);
  useEffect(() => {
    PaymentsForTenantApi({
      partner_type:
        'tenant' || userInfo?.partner[0].is_tenant ? 'tenant' : 'owner',
      partner: 852 || userInfo.partner_id,
      flat: selectedProp.id,
    });

    return () => {};
  }, []);
  const [dummy, setDummy] = useState([
    {
      name: 'test',
      date: '2023-02-23 12:44:51',
      amount: '1221',
      state: 'draft',
    },
  ]);
  // console.log(userInfo, 'userInfo');

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          // display: 'flex',
        }}>
        {/* {isLoading ? (
          <Spinner />
        ) : Payments.length > 0 ? ( */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginVertical: 10, marginHorizontal: 10}}
          vertical
          data={dummy} //Payments
          renderItem={({item}) => <PaymentCard Item={item} />}
        />
        {/* ) : (
          <Text style={{color: 'black', fontWeight: 'bold'}}>No Data</Text>
        )} */}
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
  useEffect(() => {
    MaintianenceApi({
      partner_type:
        'tenant' || userInfo?.partner[0].is_tenant ? 'tenant' : 'owner',
      partner: 852 || userInfo.partner_id,
      flat: selectedProp.id,
    });

    return () => {};
  }, [IsFocused]);
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

      <View style={{position: 'absolute', bottom: 10, left: '35%'}}>
        <BasicButton
          text="Create Request"
          color={COLORS.primary}
          width={35}
          onPress={() => navigation.push('CreateRequestScreen')}
          style={{height: 45}}
          styleText={{fontSize: 14, marginHorizontal: 5}}
          Icon={<AntDesign color={COLORS.white} size={12} name="plus" />}
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
const ThirdRoute = () => {
  const refRBSheet = useRef();
  const selectedProp = useSelector(state => state.MyProperties.selectedProp);
  const navigation = useNavigation();
  return (
    <>
      <FlatList
        snapToInterval={width - 20}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginVertical: 10, marginHorizontal: 10}}
        vertical
        data={[{name: 'dummy', date: '2023-02-23 12:44:51'}]} //selectedProp?.contract?.documents
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.push('PdfView', item)}>
            <DocumentCard item={item} />
          </Pressable>
        )}
      />

      <BottomSheet />
    </>
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
            <MaterialCommunityIcons
              color={COLORS.blue}
              size={15}
              name="credit-card-outline"
            />
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                fontSize: 13,
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
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              color={COLORS.blue}
              size={15}
              name="hammer-screwdriver"
            />
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                fontSize: 13,
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
              size={15}
              name="file-document-multiple-outline"
            />
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                fontSize: 13,
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

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text
                style={{
                  opacity,
                  backgroundColor: this.state.index == i ? COLORS.white : null,
                  padding: 7,
                  borderRadius: 8,
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
    backgroundColor: COLORS.light,
    marginHorizontal: 15,
    borderRadius: 8,
    // paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
});
