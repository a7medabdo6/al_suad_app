import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from './consts/colors';
import {useChangePersonalInfo} from './apis/Home';
import {useSelector} from 'react-redux';

const PersonalInformation = () => {
  const {userInfo} = useSelector(state => state.userinfo);
  console.log(userInfo, 'userInfo');
  const [name, setname] = useState(userInfo?.name);
  const [email, setemail] = useState(userInfo?.email);
  const [phone, setphone] = useState(userInfo?.phone);

  const {mutate: ChangePersonalInfo} = useChangePersonalInfo();
  const OnSubmit = async () => {
    await ChangePersonalInfo({
      name,
      email,
      phone,
      partner_id: userInfo?.partner_id,
    });
  };
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
          backgroundColor: COLORS.backgroundblue,
          paddingVertical: 30,
        }}>
        <View style={{position: 'relative'}}>
          <Image
            style={{height: 150, width: 150, borderRadius: 100}}
            source={require('./assets/man.jpg')}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: COLORS.red,
              bottom: 5,
              right: 0,
              borderRadius: 5,
            }}>
            <FontAwesome5
              name="pen"
              color="white"
              size={18}
              style={{padding: 5}}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            backgroundColor: 'white',
            width: '95%',
            padding: 15,
          }}>
          <View style={{borderColor: 'grey', borderRadius: 10, borderWidth: 1}}>
            <Text style={{marginLeft: 20, marginTop: 10, color: 'grey'}}>
              Name
            </Text>
            <TextInput
              placeholder={name}
              value={name}
              onChangeText={e => setname(e)}
              style={{marginLeft: 20, color: 'black'}}
            />
          </View>

          <View
            style={{
              borderColor: 'grey',
              borderRadius: 10,
              borderWidth: 1,
              marginTop: 20,
            }}>
            <Text style={{marginLeft: 20, marginTop: 10, color: 'grey'}}>
              Phone Number
            </Text>
            <TextInput
              placeholder={phone}
              value={phone}
              onChangeText={e => setphone(e)}
              style={{marginLeft: 20, color: 'black'}}
            />
          </View>

          <View
            style={{
              borderColor: 'grey',
              borderRadius: 10,
              borderWidth: 1,
              marginTop: 20,
            }}>
            <Text style={{marginLeft: 20, marginTop: 10, color: 'grey'}}>
              Email
            </Text>
            <TextInput
              placeholder={email}
              value={email}
              onChangeText={e => setemail(e)}
              style={{marginLeft: 20, color: 'black'}}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            width: '100%',
            padding: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={OnSubmit}
            style={{
              height: 60,
              width: '95%',
              backgroundColor: COLORS.red,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white'}}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
