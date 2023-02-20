import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyTabs from './src/Components/Navigation/BottomStackNavigaion';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/Login';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store/index';
import {QueryClient, QueryClientProvider} from 'react-query';
import SignupScreen from './src/screens/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllStack from './src/Components/Navigation/AllStack';
import AuthStack from './src/Components/Navigation/AuthStack';
import {setuserInfo} from './src/Store/Message/MessageSlice';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const [isAuth, setIsAuth] = useState(false);
  const [user, setuser] = useState(false);
  const [login, setLogin] = useState(false);
  const {userInfo, isAuth, logout} = useSelector(state => state.userinfo);

  const [isRegister, setisRegister] = useState(false);
  const dispatch = useDispatch();

  const getAuth = async () => {
    const res = await AsyncStorage.getItem('User');
    const parsedUser = JSON.parse(res);
    console.log(parsedUser, 'parsedUser');
    if (parsedUser) {
      dispatch(setuserInfo(parsedUser));
    }
    return parsedUser;
  };
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => {};
  }, []);

  useEffect(() => {
    getAuth();
  }, [logout]);
  return userInfo?.uid || isAuth ? <AllStack /> : <AuthStack />;
}

export default App;
