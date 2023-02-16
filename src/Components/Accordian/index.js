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
        width: '100%',
        width: ScreenWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          width: ScreenWidth - 30,
          borderRadius: 5,
          marginVertical: 20,
          paddingVertical: 30,
          backgroundColor: 'white',
        }}>
        <Collapse style={{width: '100%', backgroundColor: 'white'}}>
          <CollapseHeader style={{width: '100%', backgroundColor: 'white'}}>
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
                color={COLORS.red}
                size={22}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={{color: 'black', padding: 10}}>{body}</Text>
          </CollapseBody>
        </Collapse>
      </View>
    </View>
  );
};

export default Accordian;
