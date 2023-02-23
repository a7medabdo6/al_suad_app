import { Text, View ,StyleSheet} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import COLORS from '../../consts/colors';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const Example = ({Type, data, settype, type,title}) => {
  const [service, setService] = React.useState('');
  // console.log(data, 'data');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
    <SelectDropdown
      data={data}
      buttonStyle={{
        backgroundColor: 'white',
        borderColor: '#d0d7ded1',
        borderWidth: 1,
        width: '100%',
        marginTop: 15,
        borderRadius: 10,
        height: 40,
      }}
      buttonTextStyle={{color: 'grey'}}
      defaultButtonText={Type}
      onSelect={(selectedItem, index) => {
        // console.log(selectedItem, index);
        settype(selectedItem.id);
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
    <View style={styles.fly}>
    <MaterialIcons name="keyboard-arrow-down" size={18} color={COLORS.dark} />
    </View>
    
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 15, color: 'black',marginTop:20},
  container:{width:'100%'},
  fly:{position:'absolute',top:25,right:20}
});

export default Example;
