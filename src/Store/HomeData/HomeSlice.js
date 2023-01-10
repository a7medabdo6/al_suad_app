import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const HomeDataSlice = createSlice({
  name: 'HomeData',
  initialState: {
    data: [],
    Detailed: {},
    fav: [],
  },
  reducers: {
    setHomeData(state, action) {
      state.data = action.payload;
    },
    setHomeDetailedData(state, action) {
      state.Detailed = action.payload;
    },
    setFav(state, action) {
      state.fav = action.payload;
    },
  },
});

export const {setHomeData, setHomeDetailedData, setFav} = HomeDataSlice.actions;
export default HomeDataSlice.reducer;
