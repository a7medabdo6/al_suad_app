import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ArrowIcon = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 2,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {icon}
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" color="black" size={18} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArrowIcon;

const styles = StyleSheet.create({});
