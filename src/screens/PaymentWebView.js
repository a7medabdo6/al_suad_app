import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const PaymentWebView = ({payment_link}) => {
  console.log(payment_link);
  return (
    <View style={{height: '100%'}}>
      <WebView source={{uri: payment_link}} />
    </View>
  );
};

export default PaymentWebView;
