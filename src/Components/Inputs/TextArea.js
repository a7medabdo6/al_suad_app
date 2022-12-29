import React from 'react';
import {TextArea, Box, Center, NativeBaseProvider} from 'native-base';

const Example = ({text}) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box alignItems="center" w="100%" style={{marginTop: 15}}>
          <TextArea
            w={{
              base: '80%',
              md: '25%',
            }}
            mx="180"
            size="xl"
            placeholder={text}
            borderRadius={10}
            h={20}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Example;
