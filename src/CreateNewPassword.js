import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import COLORS from './consts/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useChangeassword} from './apis/Home';
import {useDispatch} from 'react-redux';
import {setPass} from './Store/PersonalInfoSlice/PersonalInfoSlice';
import {TextInput} from '@react-native-material/core';

const CreateNewPassword = () => {
  const {userInfo} = useSelector(state => state.userinfo);
  const {passwordChange} = useSelector(state => state.PersonalInfo);
  const dispatch = useDispatch();
  const [password, setpassword] = useState(null);
  const [confirm_password, setconfirm_password] = useState(null);
  const {mutate: ChnagePass} = useChangeassword();
  const OnSubmit = async () => {
    await ChnagePass({
      password,
      confirm_password,

      partner_id: userInfo?.partner_id,
    });
  };
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <ScrollView>
        <View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 200,
                width: '60%',
                marginVertical: 20,
                marginLeft: 50,
                alignSelf: 'center',
              }}
              source={require('./assets/png/newpassword.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <TextInput
              variant="outlined"
              label={
                <Text>
                  <FontAwesome5
                    name="lock"
                    color={COLORS.blue}
                    size={18}
                    style={{marginLeft: 20}}
                  />{' '}
                  New Password
                </Text>
              }
              placeholderTextColor={COLORS.blue}
              style={{margin: 5, width: '85%'}}
              color={COLORS.blue}
            />
            <TextInput
              variant="outlined"
              label={
                <Text>
                  <FontAwesome5
                    name="lock"
                    color={COLORS.blue}
                    size={18}
                    style={{marginLeft: 20}}
                  />{' '}
                  Confirm Password
                </Text>
              }
              placeholderTextColor={COLORS.blue}
              style={{margin: 5, width: '85%'}}
              color={COLORS.blue}
            />
            {/* <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 20,
                marginHorizontal: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{marginRight: 10}}>
                  <FontAwesome5
                    name="lock"
                    color={COLORS.red}
                    size={18}
                    style={{padding: 5, marginLeft: 20}}
                  />
                </View>

                <View>
                  <Text style={{marginTop: 10, color: 'grey'}}>
                    New Password
                  </Text>

                  <TextInput
                    placeholder="***********"
                    onChangeText={e => setpassword(e)}
                    value={password}
                    style={{color: 'black'}}
                  />
                </View>
              </View>

              <View>
                <FontAwesome5
                  name="eye-slash"
                  color={COLORS.red}
                  size={18}
                  style={{padding: 5}}
                />
              </View>
            </View> */}
            {/* 
            <View
              style={{
                marginTop: 15,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 20,
                marginHorizontal: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{marginRight: 10}}>
                  <FontAwesome5
                    name="lock"
                    color={COLORS.red}
                    size={18}
                    style={{padding: 5, marginLeft: 20}}
                  />
                </View>

                <View>
                  <Text style={{marginTop: 10, color: 'grey'}}>
                    Confirm Password Password
                  </Text>
                  <TextInput
                    placeholder="***********"
                    onChangeText={e => setconfirm_password(e)}
                    value={confirm_password}
                    style={{color: 'black'}}
                  />
                </View>
              </View>

              <View>
                <FontAwesome5
                  name="eye-slash"
                  color={COLORS.red}
                  size={18}
                  style={{padding: 5}}
                />
              </View>
            </View> */}
          </View>

          <View
            style={{
              marginTop: 10,
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
              <Text style={{color: 'white'}}>Continue</Text>
            </TouchableOpacity>
            {passwordChange &&
              Alert.alert(passwordChange.status, passwordChange.status, [
                {
                  text: 'ok',
                  onPress: () => dispatch(setPass(null)),
                },
              ])}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
