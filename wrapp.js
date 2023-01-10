import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store/index';
import {QueryClient, QueryClientProvider} from 'react-query';

import App from './App';

function Wrapp() {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  const queryClient = new QueryClient();

  return (
    // <ScrollView style={backgroundStyle}>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
        {/* <Toast/> */}
      </Provider>
    </QueryClientProvider>

    // </ScrollView>
  );
}

export default Wrapp;
