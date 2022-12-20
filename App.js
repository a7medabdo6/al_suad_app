import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyTabs from './src/Components/Navigation/BottomStackNavigaion';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <ScrollView style={backgroundStyle}>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

    // </ScrollView>
  );
};

export default App;
