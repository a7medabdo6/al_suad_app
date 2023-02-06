import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';

import COLORS from '../../consts/colors';
import {View, Text, Image, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ScreenWidth = Dimensions.get('window').width;
export default function LogoTitle({item}) {
  const navigation = useNavigation();
  const HomeDetailedData = useSelector(state => state.Home.Detailed);

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
            source={
              HomeDetailedData?.image_128
                ? {
                    uri: `data:image/jpeg;base64,${HomeDetailedData.image_128}`,
                  }
                : require('../../assets/unknown.jpg')
            }
          />
        </View>
        <View>
          <Text style={{color: COLORS.blue, marginHorizontal: 5}}>
            {' '}
            {HomeDetailedData?.name}
          </Text>
          <Text style={{color: COLORS.dark, marginHorizontal: 5}}>
            {' '}
            {HomeDetailedData?.project_id[1]}
          </Text>
        </View>
      </View>
    </View>
  );
}
