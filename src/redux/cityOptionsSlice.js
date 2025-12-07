import { createSlice } from '@reduxjs/toolkit';

const cityOptionsSlice = createSlice({
  name: 'cityOptions',
  initialState: [],
  reducers: {
    setCityOptions: (state, action) => action.payload,
  },
});

export const { setCityOptions } = cityOptionsSlice.actions;
export default cityOptionsSlice.reducer;
