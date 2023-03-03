import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';

const SettingCard = ({title, container}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 16,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          marginLeft: 10,
          paddingBottom: 15,
          borderBottomWidth: 1.5,
          borderBottomColor: COLORS.bottomBorder,
        }}>
        <Text style={{fontWeight: '600', color: 'black'}}>{title}</Text>
      </View>
      {container}
    </View>
  );
};

export default SettingCard;
