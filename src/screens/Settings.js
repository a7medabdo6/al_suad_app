import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Button, Center} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../consts/colors';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pressable} from 'react-native';
import {useNavigation, useNavigationBuilder} from '@react-navigation/native';
import {setLogout} from '../Store/Message/MessageSlice';
import {useDispatch} from 'react-redux';
import RNRestart from 'react-native-restart';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';
import SettingCard from '../Components/Cards/SettingCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useHelpCenterApi} from '../apis/Home/index';
import Header from '../Components/Header';
import ArrowIcon from '../Components/ArrowIcon';
import NewNavDesign from '../Components/Navigation/NewNavDesign';
import font from '../consts/font';

//svg
import Profile from '../assets/svg/Profile.svg';
import Lock from '../assets/svg/Lock.svg';
import Building from '../assets/svg/building.svg';
import Calendar from '../assets/svg/Calendar.svg';
import Heart from '../assets/svg/Heart.svg';
import Bell from '../assets/svg/bell.svg';
import Language from '../assets/svg/language.svg';
import Help from '../assets/svg/help.svg';
import Key from '../assets/svg/key.svg';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {mutate: HelpCenterApi, isLoading} = useHelpCenterApi();
  const {userInfo} = useSelector(state => state.userinfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logout = async () => {
    const res = await AsyncStorage.removeItem('User');
    // console.log('logout', res, 'logout');

    dispatch(setLogout(true));
    RNRestart.Restart();
  };
  useEffect(() => {
    //
    HelpCenterApi();

    return () => {};
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header title={'More'} />
      <ScrollView>
        <SettingCard
          title={'Account'}
          container={
            <View>
              <ArrowIcon
                title={'Person Information'}
                onPress={() => navigation.navigate('PersonalInformation')}
                icon={<Profile />}
              />
              <ArrowIcon
                title={'Recovery Password'}
                onPress={() => navigation.navigate('CreateNewPassword')}
                icon={<Lock />}
              />
              <ArrowIcon
                title={'My Properties'}
                // onPress={() => navigation.navigate('RecoveryPassword')}
                icon={<Building />}
              />
              <ArrowIcon
                title={'My Visits'}
                onPress={() => navigation.navigate('myVisits')}
                icon={<Calendar />}
              />
              <ArrowIcon
                title={'My Favourits'}
                // onPress={() => navigation.push('myVisits')}
                icon={<Heart />}
              />
            </View>
          }
        />

        <SettingCard
          title={'General'}
          container={
            <View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingVertical: 15,
                }}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Bell />

                  <Text style={{color: 'black', marginHorizontal: 10}}>
                    Notification
                  </Text>
                </View>
                <View style={{marginLeft: 20}}>
                  <Switch
                    trackColor={{false: '#767577', true: COLORS.red}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>

              <ArrowIcon
                title={'Language'}
                // onPress={() => navigation.navigate('RecoveryPassword')}
                icon={<Language />}
              />
              <ArrowIcon
                title={'Help Center'}
                onPress={() => navigation.push('HelpCenterScreen')}
                icon={<Help />}
              />
            </View>
          }
        />

        <SettingCard
          title={'About'}
          container={
            <View>
              <ArrowIcon
                title={'Privacy & Policy'}
                onPress={() => navigation.navigate('Policy')}
                icon={<Key />}
              />

              <ArrowIcon
                title={'Terms of Services'}
                onPress={() => navigation.navigate('TermsOfService')}
                icon={<Key />}
              />
              <ArrowIcon
                title={'About us'}
                onPress={() => navigation.navigate('AboutUs')}
                icon={<Help />}
              />
            </View>
          }
        />

        <Pressable onPress={() => logout()}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignContent: 'center',
              flexDirection: 'row',
              padding: 15,
            }}>
            <Ionicons
              style={{paddingRight: 20, paddingLeft: 10}}
              name="log-out-outline"
              color={COLORS.red}
              size={25}
            />
            <Text style={{fontSize: 15, color: COLORS.red}}>Logout</Text>
          </View>
        </Pressable>
        <View style={styles.down} />
      </ScrollView>

      <NewNavDesign navigation={navigation} index={4} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 75,
    height: 75,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 80,
    fontWeight: 'bold',
  },
  down: {height: font.height * 0.18},
});

export default Setting;
