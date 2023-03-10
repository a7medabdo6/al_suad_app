import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import COLORS from './consts/colors';
import {useSelector} from 'react-redux';
import Header from './Components/Header';
import HTMLView from 'react-native-htmlview';

const AboutUs = () => {
  const {HelpCenter} = useSelector(state => state.HelpCenter);
  // console.log(HelpCenter?.company_id?.[0].about_us, 'HelpCenter');
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header title={'About Us'} back />
      <ScrollView style={{flex: 1}}>
        <View>
          <View>
            <Image
              style={{height: 200, width: '100%'}}
              source={require('./assets/bg_login.png')}
            />
          </View>

          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <HTMLView value={`${HelpCenter?.company_id?.[0].about_us}`} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
