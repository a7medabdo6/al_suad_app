import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import COLORS from './consts/colors';
import {useSelector} from 'react-redux';

const AboutUs = () => {
  const {HelpCenter} = useSelector(state => state.HelpCenter);
  // console.log(HelpCenter?.company_id?.[0].about_us, 'HelpCenter');
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <View>
          <Image
            style={{height: 200, width: '100%'}}
            source={require('./assets/bg_login.png')}
          />
        </View>

        <View style={{marginTop: 40, marginHorizontal: 15}}>
          <Text style={{color: COLORS.red, fontSize: 18}}>
            {' '}
            lorem Lorem Ipsum is simply dummy{' '}
          </Text>
          <Text style={{marginTop: 10, color: COLORS.dark}}>
            {HelpCenter?.company_id?.[0].about_us}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUs;
