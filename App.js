import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyTabs from './src/Components/Navigation/BottomStackNavigaion';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/Login';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isAuth, setIsAuth] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <ScrollView style={backgroundStyle}>
    <NavigationContainer>
      {isAuth ? <MyTabs /> : <LoginScreen setIsAuth={setIsAuth} />}
    </NavigationContainer>

    // </ScrollView>
  );
};

export default App;
