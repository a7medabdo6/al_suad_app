import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {setselectedProp} from '../../Store/MyProperty/MyPropertySlice';
import {useDispatch} from 'react-redux';
import font from '../../consts/font';
const PropertyCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Diff = () => {
    const currentDate = new Date();
    const futureDate = new Date(item?.contract.date_to);
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let currentDate = `${year}-${month}-${day}`;
    const diffTime = Math.abs(futureDate - currentDate);
    console.log(diffTime, 'diffTime');
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setselectedProp(item));
        navigation.push('PaymentScreen', {flat: item.id, index: 1, item});
      }}>
      <View
        style={{
          height: 'auto',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderRadius: 15,
          marginTop: 10,
          paddingHorizontal: 10,
          backgroundColor: COLORS.backgroundLight,
          paddingVertical: 5,
          marginHorizontal: 15,
          borderWidth: 1,
          borderColor: COLORS.stock,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: COLORS.lightWhite,
            borderRadius: 12,
            marginVertical: 5,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{
                height: 70,
                width: 70,
                backgroundColor: COLORS.white,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 3,
              }}
              source={
                item.image_128
                  ? {uri: `data:image/jpeg;base64,${item?.image_128}`}
                  : require('../../assets/unknown.jpg')
              }
              resizeMode="contain"
            />
            <View style={{marginHorizontal: 5, width: font.width * 0.47}}>
              <Text
                style={{
                  color: COLORS.dark,
                  fontWeight: '500',
                  fontSize: 12,
                }}
                numberOfLines={1}>
                {' '}
                {item?.name}
              </Text>
              <Text style={{color: COLORS.grey, fontSize: 12}}>
                {' '}
                {item?.project_id[1]}
              </Text>
              <Text
                style={{
                  color: COLORS.blue,
                  fontSize: 12,
                  fontWeight: '700',
                }}>
                Ref: {item?.code}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 5,
              backgroundColor: COLORS.blue,
              padding: 6,
              borderRadius: 40,
            }}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={13}
              color={COLORS.white}
              // onPress={navigation.goBack}
            />
          </View>
        </View>
        <View style={style.divided} />

        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 5}}>
          <View style={{flex: 1}}>
            <Text style={style.subTitle}>Amount</Text>
            <Text style={style.boldText}>
              AED {item?.contract.total_value} /{' '}
              {item?.contract.rent_period_type}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View style={{display: 'flex'}}>
              <Text style={style.subTitle}>Contract end:</Text>
              <Text style={style.boldText}>{item?.contract.date_to}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            width: font.width * 0.8,
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 8,
            marginVertical: 10,
          }}>
          <Image source={require('../../assets/png/Calendar.png')} />
          <Text style={{color: COLORS.blue, marginHorizontal: 5}}>
            Due in {Diff()} days
          </Text>
        </View>

        <View>{/* <Text>heel</Text> */}</View>
      </View>
      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          width: '90%',
          marginVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setselectedProp(item));
            navigation.navigate('PaymentScreen', {flat: item.id, index: 0});
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(setselectedProp(item));
            navigation.push('PaymentScreen', {flat: item.id, index: 1});
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(setselectedProp(item));
            navigation.push('PaymentScreen', {flat: item.id, index: 2});
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
        </TouchableOpacity>
      </View> */}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  line: {
    // borderBottomColor: COLORS.grey,
    // borderColor: 'white',
    width: '90%',
    height: 1,
    borderWidth: 0.5,
    // opacity: 0.4,
    marginVertical: 20,
    marginHorizontal: '5%',
    // height: 10,
  },
  divided: {
    borderBottomColor: COLORS.bottomBorder,
    borderBottomWidth: 1,
    width: '95%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  subTitle: {
    color: COLORS.lightGrey,
    fontWeight: '500',
    fontSize: 12,
  },
  boldText: {
    color: COLORS.dark,
    fontWeight: '700',
  },
});
export default PropertyCard;
