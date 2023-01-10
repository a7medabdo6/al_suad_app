import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './Message/MessageSlice';
import HomeDataSlice from './HomeData/HomeSlice';
import MyPropertySlice from './MyProperty/MyPropertySlice';
import CreateVistSlice from './CreateVisit/CreateVistSlice';
import MaintainenceSlice from './Maintainence/MaintainenceSlice';
import PaymentsSlice from './Payments/PaymentsSlice';
export const store = configureStore({
  // ...
  reducer: {
    userinfo: UserSlice,
    Home: HomeDataSlice,
    MyProperties: MyPropertySlice,
    CreateVist: CreateVistSlice,
    Maintainence: MaintainenceSlice,
    Payments: PaymentsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
