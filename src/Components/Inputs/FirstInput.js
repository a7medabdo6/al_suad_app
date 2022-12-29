import React from 'react';
import {Input, Box, Center, NativeBaseProvider, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';

const Example = ({text, Icon}) => {
  return (
    <NativeBaseProvider>
      <Box alignItems="center" style={{marginTop: 15}}>
        <Input
          InputLeftElement={Icon}
          w={{
            base: '75%',
            md: '25%',
          }}
          mx="190"
          size="lg"
          height={55}
          placeholder={text}
          borderRadius={10}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default Example;
