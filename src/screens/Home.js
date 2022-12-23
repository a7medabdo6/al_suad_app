import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');
import houses from '../consts/houses';
const HomeScreen = ({navigation}) => {
  const optionsList = [
    {title: 'Buy a Home', img: require('../assets/house1.jpg')},
    {title: 'Rent a Home', img: require('../assets/house2.jpg')},
  ];
 
 
  const Card = ({house}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={style.card}>
          <View style={style.allIconflex}>
            <View style={style.allIcon}>
              <View>
              </View>
              <View style={style.twoIcon}>
               
                <Ionicons name="push-outline" style={style.icon} size={18} />

                <Ionicons name="heart-outline" style={style.icon} size={18} />
              </View>
            </View>
          </View>

          <Image source={house.image} style={style.cardImage} />

          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginTop: 10,
              }}>
              <Text
                style={{fontSize: 12, fontWeight: '500', color: COLORS.dark}}>
                {house.title}
              </Text>
              <Text
                style={{fontWeight: '500', color: COLORS.grey, fontSize: 12}}>
                {house.location}
              </Text>
            </View>

            {/* Location text */}

            <Text
              style={{
                color: COLORS.blue,
                fontSize: 14,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              3000.00 AED/mo
            </Text>
            <Text
              style={{
                color: COLORS.grey,
                fontSize: 12,
                marginTop: 5,
                fontWeight: '500',
              }}>
              Villa No.12 - 55 B Street - Dubai
            </Text>
            {/* Facilities container */}
            <View style={{flexDirection: 'column'}}>
              <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={style.facility}>
                  <Ionicons name="bed-outline" size={18} color={COLORS.dark} />
                  <Text style={style.facilityText}> 3 Rooms</Text>
                </View>
                <View style={style.facility}>
                  <Icon name="bathtub-outline" size={18} color={COLORS.dark} />
                  <Text style={style.facilityText}>2 Bathrooms</Text>
                </View>
                <View style={style.facility}>
                  <Ionicons
                    name="md-repeat-sharp"
                    size={18}
                    color={COLORS.dark}
                  />
                  <Text style={style.facilityText}>250 ft2</Text>
                </View>
              </View>
              <View style={style.bluebox}>
                <Text style={style.blueboxtext}>
                  <Ionicons
                    name="information-circle-outline"
                    size={12}
                    style={{marginHorizontal:3}}
                    color={COLORS.blue}
                  />
                  You have already sent an Inquiry: 14th of July
                </Text>
              </View>
            </View>
          </View>
          <View style={style.line}></View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      {/* <View style={style.header}>
        <View>
          <Text style={{color: COLORS.grey}}>Location</Text>
          <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
            Canada
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../assets/person.jpg')}
        />
      </View> */}
      {/* Input and sort button container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={style.searchInputContainer}>
          {/* <Icon name="search" color={COLORS.grey} size={25} /> */}
          {/* <TextInput placeholder="Search address, city, location" /> */}
          <Text style={{fontWeight: '600', color: COLORS.dark, fontSize: 14}}>
            4,612 results
          </Text>
        </View>

        <View style={style.sortBtn}>
          <Icon
            name="tune-variant"
            color={COLORS.dark}
            style={{
              borderWidth: 1,
              padding: 5,
              borderColor: COLORS.grey,
              borderRadius: 4,
            }}
            size={18}
          />
        </View>
      </View>

      {/* Render list options */}
      {/* <ListOptions /> */}

      {/* Render categories */}
      {/* <ListCategories /> */}

      {/* Render Card */}
      <FlatList
        snapToInterval={width - 20}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
        vertical
        data={houses}
        renderItem={({item}) => <Card house={item} />}
      />
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
    borderRadius:3,
    marginVertical:8,
    paddingVertical:3
  },
  blueboxtext: {
    color: COLORS.blue,
    fontSize: 12,
    marginHorizontal:3
  },
});
export default HomeScreen;
