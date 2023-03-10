import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableOpacityBtn from '../Components/Buttons/TouchBtn';
import SCREEN from '../../Layout';
import {useNavigation} from '@react-navigation/native';
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
  TouchableOpacity,
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
import {setisAuth} from '../Store/Message/MessageSlice';
// 
import {TextInput} from '@react-native-material/core';

const LoginScreen = ({navigation, route, setIsAuth, isAuth, setisRegister}) => {
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
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
      password: {required: true, minlength: 2},
      email: {required: true, minlength: 2},
    });

    // console.log(getErrorMessages());
    if (getErrorMessages()) {
      return;
    } else {
      await AsyncStorage.setItem(
        'passwordAndDb',
        JSON.stringify({
          password,
          db: 'odooerp-ae-property-developmentstage-7168665',
        }),
      );
      console.log('test');
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
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: '#eeeeee',
          width: '90%',
          marginTop: 50,
          height: '100%',
        }}>
        {/* House image */}

        {/* <View style={style.backgroundImageContainer}>
          <ImageBackground
            style={style.backgroundImage}
            source={require('../assets/bg_login.png')}></ImageBackground>
        </View> */}
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            // height: '10%',
            backgroundColor: '#eee',
            marginBottom: 50,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/png/close.png')} />
          </TouchableOpacity>
        </View>
        <View style={style.detailsContainer}>
          <Text style={style.text}>Hello Again! </Text>
          <Text style={style.textGrey}> Please sign in to your account</Text>
          <TextInput
            variant="outlined"
            label="Email address"
            placeholderTextColor={COLORS.blue}
            style={{marginTop: 15, borderRadius: 15}}
            color={COLORS.blue}
            borderRadius={10}
            value={email}
            onChangeText={e => setEmail(e)}
          />
          {isFieldInError('email') &&
            getErrorsInField('email').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          <TextInput
            variant="outlined"
            label="Password"
            placeholderTextColor={COLORS.blue}
            style={{borderRadius: 15}}
            color={COLORS.blue}
            value={password}
            onChangeText={e => setpassword(e)}
          />
          {isFieldInError('password') &&
            getErrorsInField('password').map(errorMessage => (
              <Text key={errorMessage} style={{color: 'red'}}>
                {errorMessage}
              </Text>
            ))}
          {/* <FirstInput
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
          /> */}

          {/* <FirstInput
            text="password"
            type="password"
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
          /> */}

          <Text style={{color: 'red'}}>
            {userInfo && userInfo == 'Invalid credentials.' ? userInfo : null}
          </Text>
          <Pressable
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginVertical: 15,
              marginBottom: 35,
            }}
            onPress={() => navigation.push('ResetPassword')}>
            <View>
              <Text
                style={{
                  color: COLORS.blue,
                  fontSize: 14,
                }}>
                Forgot your password?
              </Text>
            </View>
          </Pressable>
          {/* <BasicButton
            text={
              isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                'Login'
              )
            }
            onPress={() => HandleLogin()}
            type="basic"
            width={'100%'}
          /> */}
          <TouchableOpacityBtn
            color={SCREEN.OREANGE}
            text="Sign In "
            width={'100%'}
            style={{
              borderRadius: 10,
              paddingVertical: 15,
              marginVertical: 15,
            }}
            textcolor={COLORS.WHITE}
            onPress={() => HandleLogin()}
            // outline={SCREEN.OREANGE}
            // onPress={navigation.push('login')}
            type="basic"
            textSize={14}
            // outline={SCREEN.DARKGREY}
          />
          <TouchableOpacityBtn
            color={SCREEN.WHITE}
            text="Sign In with google"
            width={'100%'}
            style={{
              borderRadius: 10,
              paddingVertical: 15,
              marginVertical: 15,
            }}
            textcolor={COLORS.dark}
            // outline={SCREEN.OREANGE}
            // onPress={navigation.push('login')}
            type="basic"
            textSize={14}
            outline={SCREEN.DARKGREY}
            Icon={<Image source={require('../assets/png/google.png')} />}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text style={{color: COLORS.dark, marginHorizontal: 2}}>
              Don’t have an Account?
            </Text>
            <Pressable onPress={() => navigation.push('signup')}>
              <Text
                style={{
                  color: COLORS.blue,
                  // fontWeight: 'bold',
                  fontSize: 14,
                  marginHorizontal: 2,
                }}>
                Sign Up
              </Text>
            </Pressable>
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
    //marginTop: 40,
    // margin: 'auto',
    //  position: 'absolute',
    // marginHorizontal:10,
    paddingVertical: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    zIndex: 5,
    // paddingTop: 20,
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // alignItems: 'center',
    // height: '90%',
  },

  text: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 30,
    // width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textGrey: {
    color: COLORS.grey,
    fontSize: 14,
    // width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
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
