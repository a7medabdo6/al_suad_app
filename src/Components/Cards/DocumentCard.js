import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DocumentCard = () => {
  return (
    <View style={style.flexRowbtw}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Text style={style.icon}>
            <MaterialIcons name="photo" size={25} />
          </Text>
        </View>
        <View style={style.flexcolstart}>
          <Text
            style={{
              color: COLORS.grey,
              fontWeight: '200',
              fontWeight: 'bold',
            }}>
            Passport
          </Text>
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: '400',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Passport.png
          </Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: 2,
          marginHorizontal: 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '30%',
        }}>
        <Text
          style={{
            color: COLORS.red,
            fontWeight: '400',
            fontWeight: 'bold',
          }}>
          Expired
        </Text>
        <MaterialIcons name="close" color={COLORS.red} size={18} />
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
  },
  flexRowbtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 6,
    width: '100%',
    height: 80,
  },
  icon: {
    color: COLORS.dark,
    borderRadius: 6,
    padding: 15,
    marginHorizontal: 3,
    fontSize: 18,
    borderColor: COLORS.dark,
    borderWidth: 1,
  },
});
export default DocumentCard;
