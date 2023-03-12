import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const HomeTypesSlice = createSlice({
  name: 'HomeTypes',
  initialState: {
    types: [],
  
  },
  reducers: {
    setHomeTypes(state, action) {
      state.types = action.payload;
    },
  },
});

export const {
  setHomeTypes,

} = HomeTypesSlice.actions;
export default HomeTypesSlice.reducer;
