import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('screen');

const BasicHeader = ({title, Icon,color}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{width: '100%', height: 50}}
      onPress={() => navigation.goBack()}>
      <View
        style={{
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: color?color :COLORS.backgroundblue,
          paddingHorizontal: 10,
          width: width,
        }}>
        {Icon && Icon}
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
    </TouchableOpacity>
  );
};

export default BasicHeader;
