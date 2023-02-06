import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {api} from '../../axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import {setuserInfo} from '../../Store/Message/MessageSlice';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    // console.log(jsonValue, 'jsonValue');
    await AsyncStorage.setItem('User', jsonValue);
  } catch (e) {
    // saving error
  }
};
const postrequest = async data => {
  return await api.post('auth/', {
    params: {
      password: data.password,
      login: data.email,
      db: 'odooerp-ae-property-main-7168657',
    },
  });
};
const postCreateUserrequest = async data => {
  return await api.post('api/signup', {
    params: {
      password: data.password,
      login: data.email,
      name: data.Name,

      mobile: data.mobile,
      type: data.is_tenant,
    },
  });
};

const useLoginApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(postrequest, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      console.log(res.data, 'login');
      dispatch(setuserInfo(res.data.result));
      if (res.data.result == 'Invalid credentials.') {
      }
      storeData(res.data.result);
      if (res.data.result.uid) {
        Toast.show('User Login Succefully.', Toast.LONG, {
          backgroundColor: 'orange',
        });

        navigation.push('main');
      }
      return res.data;
    },
    onError: err => {
      // console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};

const useCreateUserHook = () => {
  const dispatch = useDispatch();
  return useMutation(postCreateUserrequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      // console.log(res.data, 'result');
    },
    onError: err => {
      // console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};

export {useLoginApi, useCreateUserHook};
