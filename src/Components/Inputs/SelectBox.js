import React from 'react';
import {Select, Box, CheckIcon, Center, NativeBaseProvider} from 'native-base';
import COLORS from '../../consts/colors';
const Example = ({Type}) => {
  const [service, setService] = React.useState('');
  return (
    <NativeBaseProvider>
      <Center>
        <Box maxW="308">
          <Select
            height={50}
            selectedValue={service}
            minWidth="308"
            accessibilityLabel={Type}
            placeholder={Type}
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Example;
