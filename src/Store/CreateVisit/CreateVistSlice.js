import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const CreateVisitSlice = createSlice({
  name: 'CreateVisit',
  initialState: {
    CreateVisit: {},
  },
  reducers: {
    setCreateVisit(state, action) {
      state.data = action.payload;
    },
    // setHomeDetailedData(state, action) {
    //   state.Detailed = action.payload;
    // },
  },
});

export const {setCreateVisit} = CreateVisitSlice.actions;
export default CreateVisitSlice.reducer;
