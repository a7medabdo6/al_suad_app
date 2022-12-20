import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import {View, Text, Image} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const BasicHeader = ({title}) => {
  return (
    <View
      style={{
        height: 350,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              color: COLORS.dark,
              marginHorizontal: 5,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BasicHeader;
