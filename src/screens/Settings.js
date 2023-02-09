import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {Button, Center} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../consts/colors';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {setLogout} from '../Store/Message/MessageSlice';
import {useDispatch} from 'react-redux';
import RNRestart from 'react-native-restart';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';

const Setting = () => {
  const {userInfo} = useSelector(state => state.userinfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logout = async () => {
    const res = await AsyncStorage.removeItem('User');
    console.log('logout', res, 'logout');

    dispatch(setLogout(true));
    RNRestart.Restart();
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
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
        {/* 
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
              backgroundColor: '#7CD2F9',
              borderRadius: 50,
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="user" size={30} color="white" />
          </View>
          <Text style={{color: '#1F1F1F', paddingLeft: 20, marginTop: 5}}>
            Change info
          </Text>
        </View>
      </View>

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
              backgroundColor: '#FF8A65',
              borderRadius: 50,
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="bluetooth-b" size={30} color="white" />
          </View>
          <Text style={{color: '#1F1F1F', paddingLeft: 20, marginTop: 5}}>
            Change Password
          </Text>
        </View>
      </View>

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
            <Ionicons name="settings-outline" size={30} color="white" />
          </View>
          <Text style={{color: '#1F1F1F', paddingLeft: 20, marginTop: 5}}>
            Setting
          </Text>
        </View>
      </View> */}
        {/***************************************/}
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
      </View>
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
