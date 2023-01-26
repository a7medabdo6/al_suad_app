import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: null,
    login: true,
    register: false,
    logout: false,
  },
  reducers: {
    setuserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setLoginOrRegister(state, action) {
      state = {...state, ...action.payload};
    },
    setLogout(state, action) {
      state.logout = action.payload;
    },
  },
});

export const {setuserInfo, setLogout} = UserSlice.actions;
export default UserSlice.reducer;
