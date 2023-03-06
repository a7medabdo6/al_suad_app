import React from 'react';
import {Button, VStack, Center, NativeBaseProvider} from 'native-base';
import COLORS from '../../consts/colors';
import {Text, View,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Example = ({
  text,
  width,
  type,
  onPress,
  color,
  Icon,
  disable,
  height = 55,
  styleText,
  style,
  outline,
  textcolor,
  textSize,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      height={height}
      disabled={disable}
      fontWeight="bold"
      fontSize={22}
      borderRadius={12}
      style={{
        backgroundColor: color ? color : COLORS.red,
        borderColor: outline ? outline : 'transparent',
        borderWidth: 1,
        ...style,
        width: width ? width : 150,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {Icon && Icon}
        {type && type == 'back' ? (
          <MaterialIcons
            name="arrow-back-ios"
            size={22}
            color={COLORS.white}
            // onPress={navigation.goBack}
          />
        ) : null}
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: textSize ? textSize : 18,
            color: textcolor ? textcolor : COLORS.white,
            marginHorizontal: 8,
            ...styleText,
          }}>
          {text}
        </Text>
        {!type && !Icon && (
          <Ionicons name="arrow-forward" size={22} color={COLORS.white} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Example;
