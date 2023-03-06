import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import SCREEN from '../../Layout';
import {ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FirstInput from '../Components/Inputs/FirstInput';
import LargeHomeCard from '../Components/Cards/LargeHomeCard';
import BottomSheet from '../Components/Sheets/New_BottomSheet';
import BasicBtn from '../Components/Buttons/BasicButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Houses = () => {
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
    <ScrollView>
      <View
        resizeMode="cover"
        style={styles.container}
        source={require('../assets/city.png')}>
        <StatusBar translucent backgroundColor="black" />

        <View style={styles.searchbox}>
          <FirstInput
            text="Search by Name or Ref No. "
            Icon={
              <Feather
                name="search"
                style={{marginLeft: 5}}
                color={SCREEN.DARKGREY}
                size={20}
              />
            }
            width={130}
            height={42}
            bgcolor={'#FAFAFA'}
            fun={e => setSearch(e)}
          />
          <View style={styles.orangeboxmain}>
            <TouchableOpacity>
              <View style={styles.orangebox}>
                <Image
                  style={{height: '50%', width: '50%'}}
                  source={require('../assets/filterwhite.png')}
                />
                {/* <Entypo name="chevron-right" color={'white'} size={30} /> */}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.orangeboxmain}>
            <TouchableOpacity>
              <View style={styles.orangebox}>
                <Image
                  style={{height: '50%', width: '50%'}}
                  source={require('../assets/location.png')}
                />
                {/* <Entypo name="chevron-right" color={'white'} size={30} /> */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {search && (
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-start',
              backgroundColor: 'white',
              height: SCREEN.HEIGHT,
              alignItems: 'flex-start',
              width: '90%',
            }}>
            <Text
              style={{
                color: SCREEN.DARKGREY,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Recent Search
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Fontisto color={SCREEN.BLUE} name="clock" size={15} />
              <Text style={{color: 'black', marginHorizontal: 5}}>
                Flat SNA
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  color: SCREEN.DARKGREY,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Popular Searches
              </Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 15,
                  width: '100%',
                  flexWrap: 'wrap',
                }}>
                <Text
                  style={{
                    color: SCREEN.BLUE,
                    borderColor: SCREEN.BLUE,
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 7,
                    paddingHorizontal: 15,
                    marginHorizontal: 3,
                    marginVertical: 3,
                  }}>
                  Dubai
                </Text>
                <Text
                  style={{
                    color: SCREEN.BLUE,
                    borderColor: SCREEN.BLUE,
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 7,
                    paddingHorizontal: 15,
                    marginHorizontal: 3,
                    marginVertical: 3,
                  }}>
                  Dubai
                </Text>
                <Text
                  style={{
                    color: SCREEN.BLUE,
                    borderColor: SCREEN.BLUE,
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 7,
                    paddingHorizontal: 15,
                    marginHorizontal: 3,
                    marginVertical: 3,
                  }}>
                  Dubai
                </Text>
                <Text
                  style={{
                    color: SCREEN.BLUE,
                    borderColor: SCREEN.BLUE,
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 7,
                    paddingHorizontal: 15,
                    marginHorizontal: 3,
                    marginVertical: 3,
                  }}>
                  Dubai
                </Text>
                <Text
                  style={{
                    color: SCREEN.BLUE,
                    borderColor: SCREEN.BLUE,
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 7,
                    paddingHorizontal: 15,
                    marginHorizontal: 3,
                    marginVertical: 3,
                  }}>
                  Dubai
                </Text>
                <Text
                  style={{
                    color: SCREEN.BLUE,
                    borderColor: SCREEN.BLUE,
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 7,
                    paddingHorizontal: 15,
                    marginHorizontal: 3,
                    marginVertical: 3,
                  }}>
                  Dubai
                </Text>
              </View>
            </View>
          </View>
        )}
        {!search && (
          <>
            <View style={styles.secondbox}>
              <BottomSheet
                Item={
                  <View style={styles.imageContainer}>
                    <Text style={styles.text}>Type</Text>
                    <View style={styles.textContainer}>
                      <Text style={styles.textGrey}>Flat</Text>
                    </View>
                  </View>
                }
                Content={
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        marginHorizontal: 10,
                        fontSize: 18,
                        // fontWeight: 'bold',
                        borderBottomColor: '#E8E8E8',
                        borderWidth: 2,
                        width: '100%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderLeftColor: 'transparent',
                        paddingBottom: 15,
                        marginBottom: 15,
                      }}>
                      Property Type
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        borderColor: SCREEN.GREY,
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 15,
                        height: 50,
                        marginVertical: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25}}
                        source={require('../assets/boxes.png')}
                      />
                      <Text
                        style={{
                          color: SCREEN.DARKGREY,
                          marginHorizontal: 10,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        borderColor: SCREEN.BLUE,
                        backgroundColor: '#FAFAFA',
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 15,
                        height: 50,
                        marginVertical: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25}}
                        source={require('../assets/build.png')}
                      />
                      <Text
                        style={{
                          color: SCREEN.DARKGREY,
                          marginHorizontal: 10,
                          fontSize: 14,
                        }}>
                        Flat
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        borderColor: SCREEN.GREY,
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 15,
                        height: 50,
                        marginVertical: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25}}
                        source={require('../assets/build.png')}
                      />
                      <Text
                        style={{
                          color: SCREEN.DARKGREY,
                          marginHorizontal: 10,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        borderColor: SCREEN.GREY,
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 15,
                        height: 50,
                        marginVertical: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25}}
                        source={require('../assets/boxes.png')}
                      />
                      <Text
                        style={{
                          color: SCREEN.DARKGREY,
                          marginHorizontal: 10,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        borderColor: SCREEN.GREY,
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 15,
                        height: 50,
                        marginVertical: 5,
                      }}>
                      <Image
                        style={{height: 25, width: 25}}
                        source={require('../assets/boxes.png')}
                      />
                      <Text
                        style={{
                          color: SCREEN.DARKGREY,
                          marginHorizontal: 10,
                          fontSize: 14,
                        }}>
                        All
                      </Text>
                    </View>
                    <BasicBtn type="basic" text="Done" width={190} />
                  </View>
                }
              />

              <View style={styles.imageContainer}>
                <Text style={styles.text}>Rooms</Text>
                <View style={styles.textContainer}>
                  <Text style={styles.textGrey}>All</Text>
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Text style={styles.text}>Price</Text>
                <View style={styles.textContainer}>
                  <Text style={styles.textGrey}>All</Text>
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: SCREEN.WIDTH * 0.91,
                marginVertical: 3,
              }}>
              <Text style={styles.textGrey}>2500 Flats</Text>
            </View>
            <View>
              <FlatList
                data={[0, 1, 1]}
                vertical
                showsHorizontalScrollIndicator={false}
                renderItem={Item}
                keyExtractor={item => item}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
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
  textGrey: {
    color: SCREEN.DARKGREY,
    fontSize: 14,
    marginHorizontal: 2,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: SCREEN.GREY,
  },
  text: {
    color: SCREEN.BLUE,
    fontSize: 12,
    fontWeight: 'bold',
  },
  outerbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    width: '90%',
    zIndex: 55,
    // height: '100%',
  },
  secondbox: {
    height: SCREEN.WIDTH * 0.775 * 0.185,
    width: SCREEN.WIDTH * 0.91,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderRadius: SCREEN.RADIUS * 0.5,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN.WIDTH * 0.775 * 0.145 * 0.48,
    // overflow: 'hidden',
  },
  searchbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: SCREEN.WIDTH * 0.92,
    marginVertical: 15,
  },
  orangeboxmain: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  orangebox: {
    height: 45,
    width: 45,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Houses;
