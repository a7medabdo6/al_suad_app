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
    <SafeAreaView
      style={{backgroundColor: COLORS.backgroundblue, height: '100%'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView>
        <SettingCard
          Header={
            <View
              style={{
                marginLeft: 10,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderBottomColor: COLORS.grey,
                paddingTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Account
              </Text>
            </View>
          }
          FirstRow={
            <TouchableOpacity
              onPress={() => navigation.navigate('PersonalInformation')}>
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
                  <Ionicons
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="person"
                    color="black"
                    size={18}
                  />

                  <Text style={{color: 'black'}}>Person Information</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </TouchableOpacity>
          }
          SecondRow={
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateNewPassword')}>
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
                  <FontAwesome
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="lock"
                    color="black"
                    size={18}
                  />
                  <Text style={{color: 'black'}}>Recovery Password</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </TouchableOpacity>
          }
          // ThiredRow={
          //   <Pressable>
          //     <View
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-between',
          //         alignItems: 'center',
          //         flexDirection: 'row',
          //         paddingVertical: 15,
          //       }}>
          //       <View
          //         style={{
          //           display: 'flex',
          //           justifyContent: 'flex-start',
          //           alignItems: 'center',
          //           flexDirection: 'row',
          //         }}>
          //         <Fontisto
          //           style={{paddingRight: 20, paddingLeft: 10}}
          //           name="holiday-village"
          //           color="black"
          //           size={16}
          //         />
          //         <Text style={{color: 'black'}}>My Properties</Text>
          //       </View>
          //       <View>
          //         <FontAwesome name="angle-right" color="black" size={18} />
          //       </View>
          //     </View>
          //   </Pressable>
          // }
          ForthRow={
            <Pressable onPress={() => navigation.push('myVisits')}>
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
                  <FontAwesome
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="calendar"
                    color="black"
                    size={18}
                  />
                  <Text style={{color: 'black'}}>My Visits</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </Pressable>
          }
        />

        <SettingCard
          Header={
            <View
              style={{
                marginLeft: 10,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderBottomColor: COLORS.grey,
                paddingTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                General
              </Text>
            </View>
          }
          FirstRow={
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
                <Ionicons
                  style={{paddingRight: 20, paddingLeft: 10}}
                  name="notifications"
                  color="black"
                  size={18}
                />

                <Text style={{color: 'black'}}>Notification</Text>
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
          }
          SecondRow={
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
                <FontAwesome
                  style={{paddingRight: 20, paddingLeft: 10}}
                  name="language"
                  color="black"
                  size={18}
                />
                <Text style={{color: 'black'}}>Language</Text>
              </View>
              <View>
                <FontAwesome name="angle-right" color="black" size={18} />
              </View>
            </View>
          }
          ThiredRow={
            <Pressable onPress={() => navigation.push('HelpCenterScreen')}>
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
                  <FontAwesome5
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="hands-helping"
                    color="black"
                    size={16}
                  />
                  <Text style={{color: 'black'}}>Help Center</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </Pressable>
          }
        />

        <SettingCard
          Header={
            <View
              style={{
                marginLeft: 10,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderBottomColor: COLORS.grey,
                paddingTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                About
              </Text>
            </View>
          }
          FirstRow={
            <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
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
                  <MaterialIcons
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="privacy-tip"
                    color="black"
                    size={18}
                  />

                  <Text style={{color: 'black'}}>Privacy & Policy</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </TouchableOpacity>
          }
          SecondRow={
            <TouchableOpacity
              onPress={() => navigation.navigate('TermsOfService')}>
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
                  <FontAwesome
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="server"
                    color="black"
                    size={18}
                  />
                  <Text style={{color: 'black'}}>Terms of Services</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </TouchableOpacity>
          }
          ThiredRow={
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
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
                  <FontAwesome
                    style={{paddingRight: 20, paddingLeft: 10}}
                    name="info"
                    color="black"
                    size={16}
                  />
                  <Text style={{color: 'black'}}>About us</Text>
                </View>
                <View>
                  <FontAwesome name="angle-right" color="black" size={18} />
                </View>
              </View>
            </TouchableOpacity>
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
      </ScrollView>

      {/* <View
        style={{
          paddingVertical: 50,
          width: '100%',
        }}>
        <View
          style={{width: '100%', paddingLeft: 20, backgroundColor: COLORS.red}}>
          <Text style={styles.text}>Setting</Text>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingBottom: 20,
              }}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `data:image/png;base64,${userInfo.partner[0].avatar_128}`,
                  }}
                />
              </View>

              <View
                style={{
                  paddingLeft: 20,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  {userInfo?.name}
                </Text>
                <Text
                  style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                  {userInfo?.partner[0].email}
                </Text>
              </View>
            </View>
          </View>
        </View>
      
        <Pressable onPress={() => logout()}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              paddingTop: 15,
              alignItems: 'center',
            }}>
            <View style={{paddingRight: 20}}>
              <Icon
                style={{marginTop: 5}}
                name="angle-right"
                size={30}
                color="#1F1F1F"
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#91A5AF',
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons name="logout" size={30} color="white" />
              </View>
              <Text style={{color: '#1F1F1F', paddingLeft: 20, marginTop: 5}}>
                Logout
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.push('myVisits')}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              paddingTop: 15,
              alignItems: 'center',
            }}>
            <View style={{paddingRight: 20}}>
              <Icon
                style={{marginTop: 5}}
                name="angle-right"
                size={30}
                color="#1F1F1F"
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#91A5AF',
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="map-pin" size={30} color="white" />
              </View>
              <Text style={{color: '#1F1F1F', paddingLeft: 20, marginTop: 5}}>
                My Visits
              </Text>
            </View>
          </View>
        </Pressable>
      </View> */}
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
});

export default Setting;
