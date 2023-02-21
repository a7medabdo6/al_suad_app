import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {api} from '../../axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setuserInfo} from '../../Store/Message/MessageSlice';
import {setFav, setHomeData} from '../../Store/HomeData/HomeSlice';
import {setmyproperties} from '../../Store/MyProperty/MyPropertySlice';
import {setCreateVisit} from '../../Store/CreateVisit/CreateVistSlice';
import {setMaintainence} from '../../Store/Maintainence/MaintainenceSlice';
import {setPayments} from '../../Store/Payments/PaymentsSlice';
import {setHelpCenter} from '../../Store/HelpCenterSlice/HelpCenterSlice';
import RNRestart from 'react-native-restart';

import {
  setPass,
  setPersonalInfo,
} from '../../Store/PersonalInfoSlice/PersonalInfoSlice';
const getHomeData = async data => {
  return await api.post('api/generic/property.flat', {});
};
const getMyPropertiesData = async data => {
  return await api.post(`api/get_my_property/${data.partner_id}`, {});
};
const getHelpCenter = async data => {
  return await api.post(`api/get_company_info/`, {});
};
//https://odooerp-ae-property-developmentstage-7168665.dev.odoo.com/api/get_company_info
const getMaintianenceData = async data => {
  return await api.post('api/property_requests', {
    params: {
      flat: data.flat,
      partner: data.partner,
      partner_type: data.partner_type,
    },
  });
};
const ChangePersonalInfo = async data => {
  console.log(data, 'data per');
  return await api.post('api/change_personal_info', {
    params: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      partner_id: data.partner_id,
      db: data.db,
      password: data.password,
    },
  });
};
const ChangePassword = async data => {
  return await api.post('api/change_password', {
    params: {
      password: data.password,
      confirm_password: data.confirm_password,
      partner_id: data.partner_id,
    },
  });
};

const getPaymentsForTenantData = async data => {
  return await api.post('api/property_payments', {
    params: {
      flat: data.flat,
      tenant: data.partner,
      partner_type: data.partner_type,
    },
  });
};
const GetMyFav = async data => {
  const fav = await AsyncStorage.getItem('Fav');

  return await api.post('api/get_my_favorites', {
    params: {
      flat_ids: fav,
    },
  });
};
const CreateVist = async data => {
  return await api.post('api/property_create_visit', {
    params: {
      flat: data.flat,
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      description: data.description,
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

const useHomeApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {DontMakeAnotherCall} = useSelector(state => state.Home);

  return useQuery(['home'], getHomeData, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      // console.log(res.data?.result.reverse(), 'result');
      let reversed = [...res.data?.result];
      if (!DontMakeAnotherCall) {
        dispatch(setHomeData(reversed.reverse()));
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

const useMyPropertyApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(getMyPropertiesData, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      console.log(res.data, 'result');
      let reversed = [...res.data?.result];
      dispatch(setmyproperties(reversed));
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');

      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};
const useHelpCenterApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(getHelpCenter, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      console.log(res.data, 'HelpCenterApi HelpCenterApi');
      dispatch(setHelpCenter(res.data?.result));
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');

      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};
const useCreateVistApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const QueryClient = useQueryClient();

  return useMutation(CreateVist, {
    onSuccess: res => {
      // console.log(res.data, 'res.data?.result');

      if (res.data?.result) {
        // let reversed = [...res.data?.result];
        // console.log(res.data?.result, 'res.data?.result');

        navigation.push('SubmitInquiry');
        dispatch(setCreateVisit(res.data?.result));
        // QueryClient.invalidateQueries('allMaintainence');
      }
      return res.data;
    },
    onError: err => {
      // console.log(err, 'err');
    },
  });
};
const useMaintianenceApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(getMaintianenceData, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      // console.log(res.data, 'result');
      dispatch(setMaintainence(res.data?.result));
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');

      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};
const useChangePersonalInfo = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(ChangePersonalInfo, {
    onSuccess: async res => {
      dispatch(setPersonalInfo(res.data?.result));
      console.log(res.data?.result?.uid, 'res.data?.result uid');
      dispatch(setuserInfo(res.data?.result));
      const jsonValue = JSON.stringify(res.data?.result);
      // console.log(jsonValue, 'jsonValue');
      await AsyncStorage.setItem('User', jsonValue);
      // RNRestart.Restart();
      navigation.push('SettingScreen');

      return res.data;
    },
    onError: err => {
      console.log(err, 'err');
    },
  });
};
const useChangeassword = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(ChangePassword, {
    onSuccess: res => {
      // dispatch(setPassword(res.data?.result));
      // navigation.push('SettingScreen');
      dispatch(setPass(res?.data?.result));
      console.log(res.data, 'change password');
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');
    },
  });
};
const usePaymentsForTenantApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(getPaymentsForTenantData, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      // console.log(res.data, 'result');
      dispatch(setPayments(res.data?.result));
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');

      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};

const useFavApi = data => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return useMutation(GetMyFav, {
    onSuccess: res => {
      // const result = {
      //   status: res.status + '-' + res.statusText,
      //   headers: res.headers,
      //   data: res.data,
      // };
      console.log(res.data, 'result');
      dispatch(setFav(res.data?.result));
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');

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

export {
  useHomeApi,
  useMyPropertyApi,
  useCreateVistApi,
  useMaintianenceApi,
  usePaymentsForTenantApi,
  useCreateUserHook,
  useFavApi,
  useHelpCenterApi,
  useChangePersonalInfo,
  useChangeassword,
};
