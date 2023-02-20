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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../consts/colors';
const HelpCenterCard = ({icon, value, text}) => {
  return (
    <View
      style={{
        width: '100%',
        width: ScreenWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          width: ScreenWidth - 30,
          borderRadius: 5,
          marginVertical: 10,
          paddingVertical: 20,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          {icon}
          <Text style={{color: 'black', fontWeight: 'bold'}}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default HelpCenterCard;
