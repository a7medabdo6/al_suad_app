import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../../consts/houses';
import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewBottomSheet from '../Sheets/NewBottomSheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect} from 'react';
const MaintenanceCard = ({
  openModal,
  setOpenModal,
  handleOpenModal,
  item,
  setMaintainenceSelceted,
}) => {
  const ScreenWidth = Dimensions.get('window').width;
  // useEffect(() => {
  //   console.log('Maintainence', item);
  // }, []);

  return (
    <View
      style={{
        width: ScreenWidth * 0.9,
        marginHorizontal: 20,
      }}>
      <View style={style.header}>
        <View style={style.row}>
          <View
            style={{
              height: 20,
              width: 2.5,
              backgroundColor: item?.is_solved ? COLORS.blue : COLORS.dark,
            }}
          />
          {item?.is_solved ? (
            <Text
              style={{
                color: COLORS.blue,
                fontWeight: '700',

                marginHorizontal: 5,
              }}>
              Solved
            </Text>
          ) : (
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: '700',
                marginHorizontal: 5,
              }}>
              Pending
            </Text>
          )}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="checkcircle" size={10} color={COLORS.blue} />
          <View style={style.line} />
          <AntDesign
            name="checkcircle"
            size={10}
            color={item?.is_solved ? COLORS.blue : COLORS.grey}
          />
        </View>
      </View>

      <View style={style.flexcolstart}>
        <View style={style.flexRowbtw}>
          <Text style={style.name}>{item?.name}</Text>
          <Text style={style.date}>{item?.create_date}</Text>
        </View>
        <View style={style.midLine} />
        <TouchableOpacity
          onPress={() => {
            handleOpenModal();
            setMaintainenceSelceted(item);
          }}
          style={{
            alignItems: 'flex-end',
            marginHorizontal: 10,
            marginBottom: 5,
          }}>
          <View style={style.coverBtn}>
            <Text style={style.txt}>View Details</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  line: {
    // borderBottomColor: COLORS.grey,
    // borderColor: 'white',
    height: 1,
    borderWidth: 0.5,
    // opacity: 0.4,
    marginVertical: 20,
    marginHorizontal: '5%',
    // height: 10,
  },
  flexcolstart: {
    flexDirection: 'column',
    borderRadius: 15,
    backgroundColor: COLORS.backgroundLight,
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.stock,
  },
  flexRowbtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    // backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  line: {backgroundColor: COLORS.light, width: 50, height: 2.5},
  coverBtn: {
    width: '35%',
    height: 40,
    backgroundColor: COLORS.tranparentBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {color: COLORS.blue, fontSize: 12, fontWeight: '600'},
  midLine: {
    width: '92%',
    backgroundColor: COLORS.bottomBorder,
    height: 1,
    marginBottom: 10,
    alignSelf: 'center',
  },
  date: {
    color: COLORS.grey,
    fontWeight: '400',
    fontWeight: 'bold',
    fontSize: 12,
  },
  name: {
    color: COLORS.grey,
    fontWeight: 'bold',
    fontSize: 13,
    fontWeight: '400',
  },
});
export default MaintenanceCard;
