import React, {useRef, useState} from 'react';
import {View, Button, Text, Image, Pressable, Alert} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/native';
export default function BottomSheet({Item, Content}) {
  const refRBSheet = useRef();

  const navigation = useNavigation();
  const HandleOpenModal = () => {
    refRBSheet.current.open();
  };
  return (
    <View>
      <Pressable onPress={() => HandleOpenModal()}>{Item}</Pressable>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={500}
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
            }}>
            {Content}
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
