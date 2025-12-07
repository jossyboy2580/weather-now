import { createSlice } from '@reduxjs/toolkit';

/*
  A location object should have the following shape
  { 
  name: name of the city,
  country: the country where the city is located
  longitude: the longitude of the location
  latitude: the latitude of the location
  timezone: the timezone of the location
  and others...
  }
*/

const initialState = () => {
  return;
};

const locationSlice = createSlice({
  name: 'currentLocation',
  initialState: null,
  reducers: {
    setCurrentLocation: (state, action) => action.payload,
  },
});

export const { setCurrentLocation } = locationSlice.actions;
export default locationSlice.reducer;
