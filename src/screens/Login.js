import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

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
import {useDispatch, useSelector} from 'react-redux';
// import Toast from 'react-native-toast-message';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useValidation} from 'react-native-form-validator';
import COLORS from '../consts/colors';
import FirstInput from '../Components/Inputs/FirstInput';
import BasicButton from '../Components/Buttons/BasicButton';
const {width} = Dimensions.get('screen');
import {useLoginApi} from '../apis/Auth/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation, route, setIsAuth, isAuth, setisRegister}) => {
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const isFocused = useIsFocused();

  const {mutate: LoginApi, isLoading} = useLoginApi();
  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {email, password},
    });
  // const showToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'Hello',
  //     text2: 'This is some something 👋',
  //   });
  // };
  const [login, setLogin] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const {userInfo} = useSelector(state => state.userinfo);

  const HandleLogin = async event => {
    validate({
      password: {required: true, minlength: 5},
      email: {required: true, minlength: 5},
    });

    // console.log(getErrorMessages());
    if (getErrorMessages()) {
      return;
    } else {
      const result = await LoginApi({email, password});
      // showToast();
    }
    // setIsAuth(!isAuth);
  };
  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('User');
      // console.log(JSON.parse(jsonValue), 'JSON.parse(jsonValue)');
      setLogin(JSON.parse(jsonValue));
      setrefresh(!refresh);
      return JSON.parse(jsonValue);
    } catch (e) {
      // read error
    }

    // console.log('Done.');
  };

  useEffect(() => {
    getMyObject();
  }, []);
  useEffect(() => {
    if (userInfo?.uid) {
      // console.log(login, 'login');
      navigation.push('main');
    }
  }, [login, userInfo, navigation, isFocused]);
  // useEffect(() => {
  //   navigation.push('main');
  // }, [navigation]);

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
            style={{marginVertical: 10}}
            source={require('../assets/logo.png')}
          />
          <Text style={style.text}>Login to manage </Text>
          <Text style={style.text}> and explore properties</Text>
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
          <Text style={{color: 'red'}}>
            {userInfo && userInfo == 'Invalid credentials.' ? userInfo : null}
          </Text>

          <BasicButton
            text={
              isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                'Login'
              )
            }
            onPress={() => HandleLogin()}
          />

          <View>
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: 'bold',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}>
              Forgot password?
            </Text>
          </View>
          <View>
            <Pressable onPress={() => navigation.push('signup')}>
              <Text
                style={{
                  color: COLORS.dark,
                  fontWeight: 'bold',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                }}>
                Register?
              </Text>
            </Pressable>
          </View>
          <View style={style.bluebox}>
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
          </View>
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
    height: 250,
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
    marginTop: 40,
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

export default LoginScreen;
