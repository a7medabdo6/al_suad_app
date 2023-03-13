import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
const ScreenWidth = Dimensions.get('window').width;

const PaymentCard = ({Item}) => {
  const navigation = useNavigation();
  // useEffect(() => {
  //   console.log('PaymentP', Item);
  // }, []);
  return (
    <View
      style={{
        width: ScreenWidth * 0.9,
        alignSelf: 'center',
      }}>
      <View style={style.row}>
        <View
          style={{
            height: 20,
            width: 2.5,
            backgroundColor: COLORS.primary,
          }}
        />
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: '700',
            marginHorizontal: 5,
          }}>
          dummy
        </Text>
      </View>
      <View style={style.flexcolstart}>
        <View style={style.flexRowbtw}>
          <Text style={style.name}>{Item?.name}</Text>
          {/* <Text style={{color: COLORS.blue, marginHorizontal: 5}}>Paid</Text> */}
          <View>
            <Text style={style.date}>{Item?.date}</Text>
          </View>
        </View>
        <View style={style.midLine} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginHorizontal: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Text style={style.subTxt}>Rent Value</Text>
            </View>
            <View
              style={{
                marginVertical: 2,
              }}>
              <Text
                style={{
                  color: COLORS.dark,
                  fontWeight: '400',
                  fontWeight: 'bold',
                }}>
                {Item?.amount} AED
              </Text>
            </View>
          </View>
          {console.log(Item)}
          {Item?.state == 'draft' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentMethod', {Item})}>
              <View style={style.coverBtn}>
                <Text style={style.txt}>Pay Now</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <Text style={{color: COLORS.red}}>{Item?.state}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  line: {backgroundColor: COLORS.light, width: 50, height: 2.5},

  flexcolstart: {
    borderRadius: 15,
    backgroundColor: COLORS.backgroundLight,
    padding: 5,
    marginTop: 15,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.stock,
  },
  flexRowbtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  name: {
    color: COLORS.blue,
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '400',
  },
  date: {
    color: COLORS.grey,
    fontWeight: '400',
    fontWeight: 'bold',
    fontSize: 12,
  },
  coverBtn: {
    height: 40,
    backgroundColor: COLORS.tranparentBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  txt: {color: COLORS.blue, fontSize: 12, fontWeight: '600'},
  midLine: {
    width: '92%',
    backgroundColor: COLORS.bottomBorder,
    height: 1,
    marginBottom: 10,
    alignSelf: 'center',
  },
  subTxt: {
    color: COLORS.grey,
    fontWeight: 'bold',
    fontSize: 11,
    fontWeight: '400',
  },
});
export default PaymentCard;
