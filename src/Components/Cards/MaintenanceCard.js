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
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewBottomSheet from '../Sheets/NewBottomSheet';
const MaintenanceCard = ({openModal, setOpenModal, handleOpenModal, item,setMaintainenceSelceted}) => {
  const ScreenWidth = Dimensions.get('window').width;

  return (
    <Pressable
      onPress={() => {
        handleOpenModal()
        setMaintainenceSelceted(item)
      }}
      style={{
        width: ScreenWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={style.flexcolstart}>
        <View style={style.flexRowbtw}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            {item?.name}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '95%',
            opacity: 0.3,
            marginVertical: 10,
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
                marginVertical: 2,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontWeight: '400',
                  fontWeight: 'bold',
                }}>
                {item?.create_date}
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 10,
            }}>
            {item?.is_solved ? (
              <Text style={{color: COLORS.blue}}>Solved</Text>
            ) : (
              <Text style={{color: COLORS.red}}>Pending</Text>
            )}
          </View>
        </View>
      </View>
    </Pressable>
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
    marginHorizontal: 6,
    width: '92%',
  },
});
export default MaintenanceCard;
