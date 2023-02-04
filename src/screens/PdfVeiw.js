import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Pdf from 'react-native-pdf';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import DocumentCard from '../Components/Cards/DocumentCard';
// Without Flow type annotations
// import PDFView from 'react-native-view-pdf/lib/index';

const {width} = Dimensions.get('screen');

const PdfView = ({route, navigation}) => {
  const item = route.params;
  console.log(item, 'pdf item');
  const selectedProp = useSelector(state => state.MyProperties.selectedProp);
  const Diff = () => {
    const currentDate = new Date();
    const futureDate = new Date(selectedProp?.contract.date_to);
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let currentDate = `${year}-${month}-${day}`;
    const diffTime = Math.abs(futureDate - currentDate);
    console.log('selectedProp', selectedProp.contract, 'selectedProp');
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.backgroundblue,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={style.card}>
        <Text
          style={{
            color: COLORS.blue,
            fontSize: 16,
            marginTop: 5,
            fontWeight: '500',
            textAlign: 'left',
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}>
          <View style={style.container}>
            <Pdf
              trustAllCerts={false}
              source={{uri: `data:application/pdf;base64,${item?.datas}`}}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`Current page: ${page}`);
              }}
              onError={error => {
                console.log(error);
              }}
              onPressLink={uri => {
                console.log(`Link pressed: ${uri}`);
              }}
              style={style.pdf}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height,
  },
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
    backgroundColor: COLORS.white,
    // elevation: 10,
    width: '90%',
    padding: 0,
    // borderRadius: 20,
    // borderBottomColor: COLORS.dark,
    // borderWidth: 1,
    // borderColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 10,
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
    padding: 5,
  },
});
export default PdfView;
