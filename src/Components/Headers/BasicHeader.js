import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const BasicHeader = ({title, Icon}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View
        style={{
          height: 350,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
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
