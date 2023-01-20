import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const MaintainenceSlice = createSlice({
  name: 'Maintainence',
  initialState: {
    Maintainence: [],
    
  },
  reducers: {
    setMaintainence(state, action) {
      state.Maintainence = action.payload;
    },
    // setHomeDetailedData(state, action) {
    //   state.Detailed = action.payload;
    // },
  },
});

export const {setMaintainence} = MaintainenceSlice.actions;
export default MaintainenceSlice.reducer;
