import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';

import COLORS from '../../consts/colors';
import {View, Text, Image, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ScreenWidth = Dimensions.get('window').width;
export default function LogoTitle() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        backgroundColor: COLORS.backgroundblue,
        width: ScreenWidth,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={{marginHorizontal: 5}}>
            <MaterialIcons
              name="arrow-back-ios"
              size={20}
              color={COLORS.grey}
              // onPress={navigation.goBack}
            />
          </View>
        </Pressable>

        <View>
          <Image
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 3,
            }}
            source={house[0].image}
          />
        </View>
        <View>
          <Text style={{color: COLORS.blue, marginHorizontal: 5}}>
            {' '}
            Villa No.12 - 55 B Street
          </Text>
          <Text style={{color: COLORS.dark, marginHorizontal: 5}}>
            {' '}
            Old Dubai Hwy No 12
          </Text>
        </View>
      </View>
    </View>
  );
}
