import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SCREEN from '../../../Layout';
import COLORS from '../../consts/colors';
import Setting from '../../assets/svg/setting.svg';
import Calender from '../../assets/svg/calender.svg';
const LargeNotificationCard = ({items, textone, texttwo, Btn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secbox}>
        {items == 2 && (
          <View style={styles.secboximage}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Setting />
              <View style={styles.secboxtext}>
                <Text style={styles.name}>Salma Mohamed</Text>
                <View style={styles.codebox}>
                  <Text style={{color: SCREEN.DARKGREY}}>11:00 am</Text>
                </View>
                <View style={styles.codebox}>
                  <Text
                    style={{
                      color: SCREEN.DARKGREY,
                      flexWrap: 'wrap',
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                    Your maintenance request{' '}
                    <Text style={{color: SCREEN.BLUE}}>Me58455</Text>
                  </Text>
                  <Text style={{color: SCREEN.DARKGREY, flexWrap: 'wrap'}}>
                    has been sent successfully
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
          </View>
        )}

        <View style={styles.secboximage}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Calender />
            <View style={styles.secboxtext}>
              <Text style={styles.name}>Visit Request Successful</Text>
              <View style={styles.codebox}>
                <Text style={{color: SCREEN.DARKGREY}}>11:00 am</Text>
              </View>
              <View style={styles.codebox}>
                <Text
                  style={{
                    color: SCREEN.DARKGREY,
                    flexWrap: 'wrap',
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  {textone ? textone : ' Your visit request has'}
                </Text>
                <Text style={{color: SCREEN.BLUE, flexWrap: 'wrap'}}>
                  {texttwo ? texttwo : '  been sent successfully'}
                </Text>
                {Btn}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bluetext: {
    color: SCREEN.BLUE,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN.WIDTH * 0.76,
    backgroundColor: SCREEN.middlebox,
    // borderColor: SCREEN.GREY,
    borderRadius: SCREEN.RADIUS,
    // borderWidth: 2,
    padding: 10,
    // marginHorizontal: 5,
    // backgroundColor: 'red',
    // backgroundColor: SCREEN.MIDDLEGREY,
  },
  secondbox: {
    height: SCREEN.WIDTH * 0.775 * 0.185,
    // width: SCREEN.WIDTH * 0.91 * 0.92,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: SCREEN.MIDDLEGREY,
    borderRadius: SCREEN.RADIUS * 0.5,
  },
  thirdbox: {
    height: SCREEN.WIDTH * 0.775 * 0.185,
    width: (SCREEN.WIDTH * 0.91 * 0.92 * 2) / 3,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    // borderRadius: SCREEN.RADIUS * 0.5,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: SCREEN.WIDTH * 0.775 * 0.145 * 0.48,
    flexDirection: 'row',
    // overflow: 'hidden',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: SCREEN.GREY,
    marginHorizontal: 4,
  },
  text: {
    color: SCREEN.BLUE,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textminy: {
    color: SCREEN.BLUE,
    fontSize: 10,
    backgroundColor: SCREEN.GREY,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  fontlarge: {
    fontSize: 14,
  },
  fontextralarge: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textGrey: {
    color: SCREEN.DARKGREY,
    fontSize: 10,
    marginHorizontal: 2,
  },
  middlebox: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    // height: SCREEN.WIDTH * 0.775 * 0.28,
    width: SCREEN.WIDTH * 0.91 * 0.92,
  },
  btnicon: {
    width: 20,
    height: 20,
  },
  fullmap: {
    width: '100%',
    height: 100,
  },
  seeMOre: {
    color: SCREEN.OREANGE,
    marginTop: 15,
    marginVertical: 25,
  },
  Description: {
    color: COLORS.dark,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  longDescription: {
    color: COLORS.dark,
    marginVertical: 5,
  },
  Amenities: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
    marginBottom: 10,
  },
  Amenitiesbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  Amenitiesinnerbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  secbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: SCREEN.MIDDLEGREY,
    borderWidth: 1,
    borderRadius: 10,
    width: SCREEN.WIDTH * 0.91 * 0.92,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
    flexWrap: 'wrap',
  },
  secboximage: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // marginHorizontal: 20,
    width: '100%',
    flexWrap: 'wrap',
  },
  secboxtext: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    // backgroundColor: 'white',
    marginTop: 10,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
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
  line: {
    borderBottomColor: SCREEN.MIDDLEGREY,
    borderRightColor: 'transparent',
    height: 5,
    borderWidth: 1,
    width: '100%',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    marginVertical: 15,
  },
  dark: {
    color: COLORS.dark,
  },
});
export default LargeNotificationCard;
