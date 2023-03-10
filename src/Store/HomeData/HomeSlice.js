import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const HomeDataSlice = createSlice({
  name: 'HomeData',
  initialState: {
    data: [],
    DontMakeAnotherCall: false,
    Detailed: null,
    fav: [],
  },
  reducers: {
    setHomeData(state, action) {
      state.data = action.payload;
    },
    setDontMakeAnotherCall(state, action) {
      state.DontMakeAnotherCall = action.payload;
    },
    setHomeDetailedData(state, action) {
      state.Detailed = action.payload;
    },
    setFav(state, action) {
      state.fav = action.payload;
    },
  },
});

export const {
  setHomeData,
  setHomeDetailedData,
  setDontMakeAnotherCall,
  setFav,
} = HomeDataSlice.actions;
export default HomeDataSlice.reducer;
