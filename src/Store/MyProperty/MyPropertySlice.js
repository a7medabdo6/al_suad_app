import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const MyPropertySlice = createSlice({
  name: 'myproperties',
  initialState: {
    myproperties: [],
  },
  reducers: {
    setmyproperties(state, action) {
      state.data = action.payload;
    },
    // setHomeDetailedData(state, action) {
    //   state.Detailed = action.payload;
    // },
  },
});

export const {setmyproperties} = MyPropertySlice.actions;
export default MyPropertySlice.reducer;
