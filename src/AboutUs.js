import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import COLORS from './consts/colors';

const AboutUs = () => {
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUs;
