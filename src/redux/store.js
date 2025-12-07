import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';
import locationReducer from './locationSlice';
import cityOptionsReducer from './cityOptionsSlice';

const store = configureStore({
  reducer: {
    // add the favourites reducer to the store
    favourites: favouritesReducer,
    // add the favourites reducer to the store
    currentLocation: locationReducer,
    // add the cityOptions reducer to the store
    cityOptions: cityOptionsReducer,
  },
});

export default store;
