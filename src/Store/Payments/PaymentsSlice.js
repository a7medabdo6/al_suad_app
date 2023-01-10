import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const PaymentsSlice = createSlice({
  name: 'Payments',
  initialState: {
    Payments: [],
  },
  reducers: {
    setPayments(state, action) {
      state.Payments = action.payload;
    },
    // setHomeDetailedData(state, action) {
    //   state.Detailed = action.payload;
    // },
  },
});

export const {setPayments} = PaymentsSlice.actions;
export default PaymentsSlice.reducer;
