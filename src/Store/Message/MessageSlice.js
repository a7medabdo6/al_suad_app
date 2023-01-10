import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    login: true,
    register: false,
  },
  reducers: {
    setuserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setLoginOrRegister(state, action) {
      state = {...state, ...action.payload};
    },
  },
});

export const {setuserInfo} = UserSlice.actions;
export default UserSlice.reducer;
