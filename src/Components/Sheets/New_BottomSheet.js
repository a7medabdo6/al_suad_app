import React, {useRef, useState} from 'react';
import {View, Button, Text, Image, Pressable, Alert} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableOpacityBtn from '../Buttons/TouchBtn';
import SCREEN from '../../../Layout';

import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/native';
export default function BottomSheet({Item, Content, Height, width}) {
  const refRBSheet = useRef();

  const navigation = useNavigation();
  const HandleOpenModal = () => {
    refRBSheet.current.open();
  };
  return (
    <View style={{width: width ? width : '50%'}}>
      {Item ? (
        <Pressable onPress={() => HandleOpenModal()}>{Item}</Pressable>
      ) : (
        <TouchableOpacityBtn
          color={SCREEN.OREANGE}
          text="Call us"
          width={'100%'}
          style={{
            borderRadius: 10,
            paddingVertical: 12,
            marginVertical: 15,
          }}
          textcolor={SCREEN.WHITE}
          // outline={SCREEN.OREANGE}
          onPress={() => HandleOpenModal()}
          type="basic"
          textSize={14}
          Icon={<Image source={require('../../assets/png/contact.png')} />}
        />
      )}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={Height ? Height : 500}
        width="100%"
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(9, 16, 29, .7)',
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
          <View
            style={{
              height: '100%',
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              // backgroundColor: 'red',
            }}>
            {Content}
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
