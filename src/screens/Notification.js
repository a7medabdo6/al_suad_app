import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import SCREEN from '../../Layout';
import {ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchableOpacityBtn from '../Components/Buttons/TouchBtn';

import FirstInput from '../Components/Inputs/FirstInput';
import LargeHomeCard from '../Components/Cards/LargeHomeCard';
import BottomSheet from '../Components/Sheets/New_BottomSheet';
import BasicBtn from '../Components/Buttons/BasicButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LargeNotificationCard from '../Components/Notification/LargeNotificationCard';
import NewBottomSheet from '../Components/Sheets/New_BottomSheet';
import COLORS from '../consts/colors';

const Notification = () => {
  const [search, setSearch] = React.useState(null);
  const [number, onChangeNumber] = React.useState('');
  //Details_Screen
  const navigation = useNavigation();
  const Item = ({item}) => (
    <TouchableOpacity onPress={() => navigation.push('Details_Screen')}>
      <LargeHomeCard width={SCREEN.WHITE} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: SCREEN.DARKGREY,
            width: '80%',
            textAlign: 'right',
            marginBottom: 10,
          }}>
          Clear All
        </Text>
        <View
          style={{
            width: '84%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.bluetext}>Today</Text>
        </View>
        <LargeNotificationCard items={2} />
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '84%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.bluetext}>Yesterday</Text>
        </View>
        <LargeNotificationCard
          textone="You can review your property "
          texttwo="Flat/SNA - 101 Block B view"
          Btn={
            <NewBottomSheet
              width={'70%'}
              Item={
                <View
                  style={{
                    backgroundColor: 'rgba(24, 88, 148, 0.05)',
                    paddingHorizontal: 15,
                    width: '100%',
                    borderRadius: 10,
                    paddingVertical: 15,
                    marginVertical: 10,
                  }}>
                  <Text style={{color: SCREEN.BLUE}}>Make Review</Text>
                </View>
              }
              Content={
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: COLORS.dark,
                      fontWeight: 'bold',
                      marginVertical: 5,
                    }}>
                    Make a Review
                  </Text>
                  <View style={styles.line} />

                  <View
                    style={{
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      borderRadius: 10,
                      borderColor: SCREEN.MIDDLEGREY,
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      width: '100%',
                    }}>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                      }}
                      source={require('../assets/house1.jpg')}
                    />
                    <View style={styles.secboxtext}>
                      <Text style={styles.name}>Flat/SNA - 101 Block...</Text>
                      <View style={styles.codebox}>
                        <Text style={{color: SCREEN.DARKGREY}}>
                          Code: SNA-101
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      marginVertical: 10,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: SCREEN.BLUE,
                        fontWeight: 'bold',
                      }}>
                      Rate the Property
                    </Text>
                    <View
                      style={{
                        marginVertical: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Ionicons
                        name="star"
                        style={{marginHorizontal: 2}}
                        size={20}
                        color="gold"
                      />
                      <Ionicons
                        name="star"
                        style={{marginHorizontal: 2}}
                        size={20}
                        color="gold"
                      />
                      <Ionicons
                        name="star"
                        style={{marginHorizontal: 2}}
                        size={20}
                        color="gold"
                      />
                      <Ionicons
                        name="star"
                        style={{marginHorizontal: 2}}
                        size={20}
                        color={SCREEN.MIDDLEGREY}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                    }}>
                    <TextInput
                      style={{
                        color: COLORS.dark,
                        borderColor: SCREEN.MIDDLEGREY,
                        borderWidth: 1,
                        height: 100,
                        borderRadius: 10,
                        marginVertical: 15,
                        paddingHorizontal: 10,
                      }}
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Write your review..."
                      placeholderTextColor={'grey'}
                    />
                    <TouchableOpacityBtn
                      color={SCREEN.OREANGE}
                      text="Send"
                      width={'100%'}
                      style={{
                        borderRadius: 10,
                        paddingVertical: 12,
                        marginVertical: 15,
                      }}
                      textcolor={SCREEN.WHITE}
                      type="basic"
                      textSize={14}
                      // Icon={<Contact />}
                    />
                  </View>
                </View>
              }
              Height={500}
            />
          }
          items={1}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bluetext: {
    color: SCREEN.BLUE,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  codebox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  code: {color: SCREEN.DARKGREY},
  header: {
    color: 'black',
  },
  name: {
    color: COLORS.dark,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: SCREEN.WIDTH,
    // width: SCREEN.WIDTH * 0.91,

    position: 'relative',
    // marginBottom: 50,
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: SCREEN.WHITE,
    alignSelf: 'center',
  },
  secboxtext: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    // backgroundColor: 'white',
    marginTop: 10,
    marginVertical: 10,
    padding: 10,
  },
  line: {
    borderBottomColor: SCREEN.MIDDLEGREY,
    borderRightColor: 'transparent',
    height: 5,
    borderWidth: 1,
    width: '100%',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    marginVertical: 15,
    marginBottom: 40,
  },
});
export default Notification;
