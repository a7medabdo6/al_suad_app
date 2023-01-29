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
const ScreenWidth = Dimensions.get('window').width;

const PaymentCard = ({Item}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: ScreenWidth,
      }}>
      <View style={style.flexcolstart}>
        <View style={style.flexRowbtw}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            {Item?.name}
          </Text>
          {/* <Text style={{color: COLORS.blue, marginHorizontal: 5}}>Paid</Text> */}

          <View style={{marginHorizontal: 5}}>
            <Text style={{color: COLORS.grey, fontWeight: 'bold'}}>
              {Item?.date}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '95%',
            opacity: 0.3,
            marginVertical: 20,
            marginHorizontal: '2%',
          }}
        />
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
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 2,
              }}>
              <Text
                style={{
                  marginHorizontal: 5,
                  color: COLORS.dark,
                  fontWeight: 'bold',
                }}>
                Amount:
              </Text>
            </View>
            <View
              style={{
                marginVertical: 2,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontWeight: '400',
                  fontWeight: 'bold',
                }}>
                AED {Item?.amount}
              </Text>
            </View>
          </View>
          {Item?.state == 'draft' ? (
            <TouchableOpacity
              onPress={() => navigation.push('PaymentMethod', {Item})}>
              <View
                style={{
                  backgroundColor: COLORS.backgroundblue,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: COLORS.blue}}>Pay Now</Text>
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
  flexcolstart: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    width: '92%',
  },
  flexRowbtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginVertical: 5,
    width: '92%',
  },
});
export default PaymentCard;
