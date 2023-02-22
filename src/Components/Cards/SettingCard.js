import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';

const SettingCard = ({
  Header,
  title,
  container,
  FirstRow,
  SecondRow,
  ThiredRow,
  ForthRow,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 16,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          marginLeft: 10,
          paddingBottom: 15,
          borderBottomWidth: 1.5,
          borderBottomColor: 'rgba(0,0,0,.2)',
        }}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>{title}</Text>
      </View>
      {container}
    </View>
  );
};

export default SettingCard;