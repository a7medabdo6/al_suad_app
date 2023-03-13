import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DocumentCard = ({item}) => {
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
            {/* <Image
              style={{width: 15, height: 10}}
              source={{uri: `data:image/png;base64,${item.datas}`}}
            /> */}
            <FontAwesome name="file-pdf-o" color="black" size={25} />
          </Text>
        </View>
        <View style={style.flexcolstart}>
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: '200',
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: '400',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {/* {item.name} */}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: 2,
          marginHorizontal: 5,
          // flexDirection: 'row',
          alignItems: 'flex-end',
          width: '30%',
        }}>
        {/* <Text
          style={{
            color: COLORS.red,
            fontWeight: '400',
            fontWeight: 'bold',
          }}>
          Expired
        </Text> */}
        <View style={style.circle}>
          <MaterialIcons
            name="keyboard-arrow-right"
            color={COLORS.white}
            size={18}
          />
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
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: 5,
  },
  flexRowbtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.backgroundLight,
    borderWidth: 1,
    borderColor: COLORS.tranparentBlue,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 6,
    width: '90%',
    height: 80,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.stock,
  },
  circle: {backgroundColor: COLORS.blue, padding: 5, borderRadius: 20},
  icon: {
    color: COLORS.dark,
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 3,
    fontSize: 18,
    backgroundColor: COLORS.tranparentBlue,
  },
});
export default DocumentCard;
