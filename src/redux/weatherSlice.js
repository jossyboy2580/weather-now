import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weatherData',
  initialState = null,
  reducers: {
    setWeatherData: (state, action) => action.payload,
  },
});
