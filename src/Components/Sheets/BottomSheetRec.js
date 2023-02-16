import React, {useRef, useState} from 'react';
import {View, Button, Text, Image, Pressable, Alert} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SelectBox from '../Inputs/SelectBox';
import BasicButton from '../Buttons/BasicButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Progress, Center, NativeBaseProvider} from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FirstInput from '../Inputs/FirstInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';
import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/native';
export default function Example({UploadImage, data}) {
  const refRBSheet = useRef();
  const [pic, setpic] = useState('');
  const [picName, setpicName] = useState('');
  const navigation = useNavigation();
  const [error, seterror] = useState(null);
  const HandleOpenModal = () => {
    if (data.name == '' || data.description == '' || data.type == '') {
      seterror('Please Fill All The Field ');
    } else {
      refRBSheet.current.open();
      seterror(null);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={() => HandleOpenModal()}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <MaterialCommunityIcons
          color={COLORS.blue}
          style={{marginHorizontal: 5}}
          size={18}
          name="plus-circle-outline"
        />
        <Text style={{color: COLORS.dark}} color={'black'}>
          Take Photo Or Video
        </Text>
      </Pressable>
      {error && Alert.alert(error)}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={200}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(178, 182, 186, 0.9)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          {/* <View style={{height: 70}}>
            <SelectBox Type="Type" />
          </View>
          <View style={{height: 70}}>
            <SelectBox Type="Expiry date" />
          </View> */}
          <View>
            <Pressable onPress={() => UploadImage()}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginVertical: 15,
                }}>
                <MaterialIcons
                  name="photo-camera"
                  size={25}
                  color={COLORS.blue}
                  style={{marginHorizontal: 8}}
                />
                <Text
                  style={{
                    color: COLORS.dark,
                  }}>
                  Open Camera
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.push('videoRec', {data})}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginVertical: 15,
                }}>
                <MaterialIcons
                  name="video-call"
                  size={25}
                  color={COLORS.blue}
                  style={{marginHorizontal: 8}}
                />
                <Text
                  style={{
                    color: COLORS.dark,
                  }}>
                  Record Video
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
