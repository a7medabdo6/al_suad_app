import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';

import {setPayments} from '../Store/Payments/PaymentsSlice';
import {useSelector} from 'react-redux';
import {usePaymentApi} from '../apis/Home';

const PaymentWebView = ({route}) => {
  const {payment_link} = useSelector(state => state.Payments);
  const {mutate: SetPayment} = usePaymentApi();

  const {id} = route.params;
  // const SubmitPayment = async () => {
  //   // dispatch(setpaymentLink(null));

  //
  // };

  useEffect(() => {
    console.log(id, 'id id id id', payment_link);
    if (id) {
      SetPayment({id});
    }
  }, [id]);
  console.log(payment_link);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
      }}>
      <WebView source={{uri: payment_link}} />
    </View>
  );
};

export default PaymentWebView;
