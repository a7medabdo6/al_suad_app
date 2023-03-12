import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
const ScreenWidth = Dimensions.get('window').width;

const Accordian = ({title, body}) => {
  return (
    <View
      style={{
        width: ScreenWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          borderRadius: 8,
          marginTop: 20,
          paddingVertical: 15,
          backgroundColor: '#FAFAFA',
          borderWidth: 1,
          borderColor: COLORS.bottomBorder,
        }}>
        <Collapse style={{width: '100%', backgroundColor: '#FAFAFA'}}>
          <CollapseHeader
            style={{
              width: '100%',
              backgroundColor: '#FAFAFA',
              paddingBottom: 10,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                flexDirection: 'row',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
              <FontAwesome
                style={{fontWeight: 'bold'}}
                name="angle-down"
                color={'#7C7C7C'}
                size={22}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text
              style={{
                color: 'black',
                padding: 10,
                borderTopWidth: 1,
                borderColor: COLORS.bottomBorder,
                marginHorizontal: 15,
              }}>
              {body}
            </Text>
          </CollapseBody>
        </Collapse>
      </View>
    </View>
  );
};

export default Accordian;
