import React from 'react';
import {Input, Box, Center, NativeBaseProvider, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';

const Example = ({text, Icon, value, fun, type, height, width, bgcolor}) => {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Input
          type={type ? type : 'text'}
          InputLeftElement={Icon}
          w={{
            base: '95%',
            md: '20%',
          }}
          // mx={width ? width : 155}
          size="sm"
          height={height ? height : 55}
          placeholder={text}
          value={value}
          variant="filled"
          onChangeText={e => fun(e)}
          borderRadius={8}
          bgColor={bgcolor ? bgcolor : 'white'}
          style={{width: '100%'}}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default Example;
