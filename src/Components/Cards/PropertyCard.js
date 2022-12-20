import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const PropertyCard = () => {
  return (
    <View
      style={{
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 15,
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        paddingVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.white,
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
            source={house[0].image}
          />
          <View>
            <Text style={{color: COLORS.blue, marginHorizontal: 5}}>
              {' '}
              Villa No.12 - 55 B Street
            </Text>
            <Text style={{color: COLORS.dark, marginHorizontal: 5}}>
              {' '}
              Old Dubai Hwy No 12
            </Text>
            <Text
              style={{color: COLORS.grey, marginHorizontal: 8, fontSize: 12}}>
              Ref: 365668
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5}}>
          <MaterialIcons
            name="arrow-forward-ios"
            size={20}
            // onPress={navigation.goBack}
          />
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginVertical: 2}}>
        <Text
          style={{marginHorizontal: 5, color: COLORS.dark, fontWeight: 'bold'}}>
          Amount:
        </Text>
        <Text
          style={{
            color: COLORS.dark,
            fontWeight: '400',
          }}>
          AED 3000.00 /year
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 2,
          width: '95%',
        }}>
        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 2}}>
          <Text
            style={{
              marginHorizontal: 5,
              color: COLORS.dark,
              fontWeight: 'bold',
            }}>
            Contract end:
          </Text>
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: '400',
            }}>
            12/03/2023
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.blue, marginHorizontal: 5}}>
            Due in 122 day
          </Text>
          <MaterialCommunityIcons
            color={COLORS.blue}
            size={18}
            name="calendar-clock-outline"
          />
        </View>
      </View>
      <View>{/* <Text>heel</Text> */}</View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '90%',
          opacity: 0.3,
          marginVertical: 10,
          marginHorizontal: '5%',
        }}
      />

      <View
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
});
export default PropertyCard;
