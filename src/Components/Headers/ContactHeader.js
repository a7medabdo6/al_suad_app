import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../consts/colors';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {setselectedProp} from '../../Store/MyProperty/MyPropertySlice';
import {useDispatch} from 'react-redux';

const PaymentHeader = ({title, item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{marginHorizontal: 5}}>
            <MaterialIcons
              name="arrow-back-ios"
              size={20}
              onPress={navigation.goBack}
            />
          </View>
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
                item.image_128
                  ? {
                      uri: `data:image/jpeg;base64,${HomeDetailedData.image_128}`,
                    }
                  : require('../../assets/unknown.jpg')
              }
            />
          </View>
          <View
            style={{
              width: '80%',
            }}>
            <Text style={{color: COLORS.blue, marginHorizontal: 5}}>
              {' '}
              {item?.name}
            </Text>
            <Text style={{color: COLORS.dark, marginHorizontal: 5}}>
              {' '}
              {item?.project_id[1]}
            </Text>
          </View>
        </View>
        {/* <View>
          <Pressable
            onPress={() => {
              // console.log('DetailsScreenInStackDetailsScreenInStack');
              dispatch(setselectedProp(item));

              navigation.push('ContractDetails');
            }}>
            <Ionicons
              name="information-circle-outline"
              style={style.icon}
              size={18}
            />
          </Pressable>
        </View> */}
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '100%',
          opacity: 0.3,
          marginVertical: 10,
        }}
      />

      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginVertical: 5,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            color={COLORS.blue}
            size={18}
            name="credit-card-outline"
          />
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: 'bold',
              marginHorizontal: 5,
            }}>
            Payments
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            color={COLORS.blue}
            size={18}
            name="hammer-screwdriver"
          />
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: 'bold',
              marginHorizontal: 5,
            }}>
            Maintenance
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            color={COLORS.blue}
            size={18}
            name="file-document-multiple-outline"
          />
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: 'bold',
              marginHorizontal: 5,
            }}>
            Documents
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default PaymentHeader;
const style = StyleSheet.create({
  icon: {
    color: COLORS.grey,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 3,
    fontWeight: 600,
    fontSize: 18,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
});
