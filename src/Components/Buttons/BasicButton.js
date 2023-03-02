import React from 'react';
import {Button, VStack, Center, NativeBaseProvider} from 'native-base';
import COLORS from '../../consts/colors';
import {Text, View} from 'react-native';
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
}) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" style={{marginVertical: 50}}>
        <Button
          w={{
            base: '62%',
            base: type == 'filter' ? '92%' : '62%',
            md: type == 'filter' ? '15%' : '25%',
          }}
          onPress={onPress}
          height={height}
          disabled={disable}
          fontWeight="bold"
          fontSize={22}
          borderRadius={12}
          style={{
            backgroundColor: color ? color : COLORS.red,
            borderColor: color ? COLORS.grey : 'transparent',
            borderWidth: 1,
            ...style,
          }}
          mx={width ? width : '180'}
          size={'lg'}>
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
                fontSize: 18,
                color: COLORS.white,
                marginHorizontal: 8,
                ...styleText,
              }}>
              {text}
            </Text>
            {!type && !Icon && (
              <Ionicons name="arrow-forward" size={22} color={COLORS.white} />
            )}
          </View>
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default Example;
