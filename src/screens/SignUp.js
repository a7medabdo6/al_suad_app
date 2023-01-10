import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../consts/houses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useValidation} from 'react-native-form-validator';

import COLORS from '../consts/colors';
import FirstInput from '../Components/Inputs/FirstInput';
import BasicButton from '../Components/Buttons/BasicButton';
const {width} = Dimensions.get('screen');
import {useCreateUserHook} from '../apis/Auth/index';
const SignupScreen = ({navigation, route, setIsAuth, setisRegister}) => {
  const [Name, setName] = useState('');
  const [mobile, setmobile] = useState('');
  const [type, settype] = useState('');

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const {mutate: CreateUserApi, isLoading} = useCreateUserHook();
  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {email, password, Name, mobile, type},
    });
  // useEffect(() => {
  //   validate({
  //     password: {required: true, minlength: 3},
  //     email: {required: true, minlength: 3},
  //     mobile: {numbers: true, minlength: 3},
  //     Name: {required: true, minlength: 3},
  //     type: {required: true, minlength: 3},
  //   });
  // }, []);
  const HandleSignUp = async event => {
    validate({
      password: {required: true, minlength: 3},
      email: {required: true, minlength: 3},
      mobile: {numbers: true, minlength: 3},
      Name: {required: true, minlength: 3},
      type: {required: true, minlength: 3},
    });

    // console.log(getErrorMessages(), 'error');
    if (getErrorMessages()) {
      return;
    }
    const result = await CreateUserApi({email, password, mobile, type, Name});
    // console.log(result, 'rrrrrr');
    // setIsAuth(true);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <View style={style.backgroundImageContainer}>
          <ImageBackground
            style={style.backgroundImage}
            source={require('../assets/bg_login.png')}></ImageBackground>
        </View>
        <View style={style.detailsContainer}>
          <Image
            style={{marginVertical: 5}}
            source={require('../assets/logo.png')}
          />
          <Text style={style.text}>Register </Text>
          <FirstInput
            text="Name"
            value={Name}
            fun={e => setName(e)}
            Icon={
              <Ionicons
                name="at"
                size={25}
                style={{marginHorizontal: 7}}
                color={COLORS.red}
              />
            }
          />
          {isFieldInError('Name') &&
            getErrorsInField('Name').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          <FirstInput
            text="Email addres"
            value={email}
            fun={e => setEmail(e)}
            Icon={
              <Ionicons
                name="at"
                size={25}
                style={{marginHorizontal: 7}}
                color={COLORS.red}
              />
            }
          />
          {isFieldInError('email') &&
            getErrorsInField('email').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          <FirstInput
            text="Mobile"
            value={mobile}
            fun={e => setmobile(e)}
            Icon={
              <Ionicons
                name="at"
                size={25}
                style={{marginHorizontal: 7}}
                color={COLORS.red}
              />
            }
          />
          {isFieldInError('mobile') &&
            getErrorsInField('mobile').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          <FirstInput
            text="password"
            value={password}
            fun={e => setpassword(e)}
            Icon={
              <Ionicons
                name="lock-closed-outline"
                size={25}
                style={{marginHorizontal: 7}}
                color={COLORS.red}
              />
            }
          />
          {isFieldInError('password') &&
            getErrorsInField('password').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          <FirstInput
            text="type"
            value={type}
            fun={e => settype(e)}
            Icon={
              <Ionicons
                name="at"
                size={25}
                style={{marginHorizontal: 7}}
                color={COLORS.red}
              />
            }
          />
          {isFieldInError('type') &&
            getErrorsInField('type').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          <BasicButton
            text={
              isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                'Signup'
              )
            }
            onPress={() => HandleSignUp()}
          />
          <View>
            <Pressable onPress={() => navigation.push('login')}>
              <Text
                style={{
                  color: COLORS.dark,
                  fontWeight: 'bold',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                }}>
                Already Have An Account?
              </Text>
            </Pressable>
          </View>
          {/* <View style={style.bluebox}>
            <View style={style.blueboxtext}>
              <Ionicons
                name="home-outline"
                size={15}
                style={{marginRight: 5}}
                color={COLORS.blue}
              />
              <Text color={COLORS.blue} style={style.margin}>
                Explore Properties as a Guest
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    // marginHorizontal: 20,
    // marginTop: 20,
    alignItems: 'center',
    height: 150,
    zIndex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    margin: 'auto',
    //  position: 'absolute',
    // marginHorizontal:10,
    backgroundColor: COLORS.white,
    zIndex: 5,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 18,
    // width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  bluebox: {
    width: '90%',
    backgroundColor: COLORS.backgroundblue,
    borderRadius: 10,
    marginVertical: 8,
    paddingVertical: 3,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  blueboxtext: {
    color: COLORS.blue,
    fontSize: 14,
    marginHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  callSupport: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  callSupportIcon: {
    backgroundColor: COLORS.red,
    padding: 8,
    borderRadius: 50,
  },
  container: {
    // ...StyleSheet.absoluteFillObject,
    //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  margin: {
    marginHorizontal: 5,
    color: COLORS.blue,
  },
});

export default SignupScreen;
