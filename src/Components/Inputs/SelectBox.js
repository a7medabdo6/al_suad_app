import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import COLORS from '../../consts/colors';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const Example = ({Type, data}) => {
  const [service, setService] = React.useState('');
  console.log(data, 'data');
  return (
    <SelectDropdown
      data={data}
      buttonStyle={{
        backgroundColor: 'white',
        borderColor: '#d0d7ded1',
        borderWidth: 1,
        width: '94%',
        marginTop: 15,
        borderRadius: 10,
        height: 55,
      }}
      buttonTextStyle={{color: 'grey'}}
      defaultButtonText={Type}
      onSelect={(selectedItem, index) => {
        // console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem.name;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item.name;
      }}
    />
  );
};

export default Example;
