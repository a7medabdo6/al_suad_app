import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import RangeSlider from 'rn-range-slider';

import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserInfoCard from '../Components/Cards/UserInfoCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BasicButton from '../Components/Buttons/BasicButton';
import Thumb from '../Components/Slider/Thumb';
import Rail from '../Components/Slider/Rail';
import RailSelected from '../Components/Slider/RailSelected';
import Label from '../Components/Slider/Label';
import Notch from '../Components/Slider/Notch';

const {width} = Dimensions.get('screen');
import houses from '../consts/houses';
const FilterScreen = ({navigation}) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.backgroundblue}
        barStyle="dark-content"
      />
      <ScrollView
        style={{
          width: '90%',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
                color: COLORS.dark,
              }}>
              City
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.backgroundblue,
                  color: COLORS.blue,
                  width: 100,
                  borderColor: '#185894',
                  fontWeight: 'bold',
                  borderWidth: 2,
                  marginHorizontal: 5,
                  textAlign: 'center',
                }}>
                Dubai
              </Text>
              <Text
                style={{
                  marginHorizontal: 5,
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.blue,
                  width: 100,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  textAlign: 'center',
                }}>
                Abudhabi
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
                color: COLORS.dark,
              }}>
              Type
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.backgroundblue,
                  color: COLORS.blue,
                  width: 140,
                  borderColor: '#185894',
                  fontWeight: 'bold',
                  borderWidth: 2,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Icon name="home-outline" size={20} color="#185894" />
                <Text>Apartment</Text>
              </Text>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.dark,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Icon name="home-outline" size={20} color={COLORS.dark} />
                <Text>House</Text>
              </Text>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.dark,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Fontisto
                  name="holiday-village"
                  size={20}
                  color={COLORS.dark}
                />
                <Text>Villa</Text>
              </Text>
            </View>
            <View
              style={{
                padding: 15,
                borderRadius: 10,
                backgroundColor: COLORS.backgroundblue,
                color: COLORS.dark,
                borderColor: COLORS.backgroundblue,
                fontWeight: 'bold',
                borderWidth: 1,
                marginHorizontal: 5,
                marginVertical: 15,
                textAlign: 'center',
                display: 'flex',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                //   alignSelf: 'center',
                //   alignContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.dark,
                  fontSize: 18,
                  marginBottom: 20,
                }}>
                Price Range
              </Text>
              <RangeSlider
                style={style.slider}
                min={0}
                max={100}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
              />
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: 30,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    marginHorizontal: 5,
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.white,
                    color: COLORS.dark,
                    width: 140,
                    borderColor: COLORS.grey,
                    fontWeight: 'bold',
                    borderWidth: 1,
                  }}>
                  1000
                </Text>
                <Text
                  style={{
                    marginHorizontal: 5,
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.white,
                    color: COLORS.dark,
                    width: 140,
                    borderColor: COLORS.grey,
                    fontWeight: 'bold',
                    borderWidth: 1,
                  }}>
                  1000
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
                color: COLORS.dark,
              }}>
              Neighborhood
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.backgroundblue,
                  color: COLORS.blue,
                  width: 140,
                  borderColor: '#185894',
                  fontWeight: 'bold',
                  borderWidth: 2,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                Jumeirah
              </Text>
              <Text
                style={{
                  marginHorizontal: 5,
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.blue,
                  width: 140,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                Dubai Marina
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
                color: COLORS.dark,
              }}>
              Bedrooms
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.backgroundblue,
                  color: COLORS.blue,
                  borderColor: '#185894',
                  fontWeight: 'bold',
                  borderWidth: 2,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Text>+1</Text>
              </Text>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.dark,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Text>+2</Text>
              </Text>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.dark,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Text>+3</Text>
              </Text>
              <Text
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  color: COLORS.dark,
                  borderColor: COLORS.grey,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}>
                <Text>+4</Text>
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              <BasicButton
                text="reset"
                width={250}
                onPress={() => {
                  // console.log(navigation);
                }}
                type="filter"
                color={COLORS.white}
              />
              <BasicButton
                text="Apply"
                width={250}
                onPress={() => {
                  // console.log(navigation);
                  navigation.navigate('HomeInstak');
                }}
                type="filter"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    // backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 340,
    backgroundColor: COLORS.white,
    // elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 0,
    borderRadius: 20,
    // borderBottomColor: COLORS.dark,
    // borderWidth: 1,
    // borderColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.dark, fontSize: 12},
  line: {
    borderBottomColor: COLORS.line,
    // borderColor: 'white',
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
    // height: 10,
  },
  allIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    zIndex: 5,
    width: '100%',
  },
  allIconflex: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  twoIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  icon: {
    color: COLORS.grey,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 3,
    fontWeight: 600,
    fontSize: 18,
  },
  bluebox: {
    width: '90%',

    backgroundColor: COLORS.backgroundblue,
    borderRadius: 3,
    marginVertical: 8,
    paddingVertical: 3,
  },
  blueboxtext: {
    color: COLORS.blue,
    fontSize: 12,
    marginHorizontal: 3,
  },
});
export default FilterScreen;
