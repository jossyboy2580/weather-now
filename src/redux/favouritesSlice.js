import { createSlice } from '@reduxjs/toolkit';

/* 
   Setup a function that loads any 
   predefined favourites from local storage 
*/

const loadFavouritesFromStorage = () => {
  try {
    const favourites = localStorage.getItem('favourites');
    return favourites ? JSON.parse(favourites) : [];
  } catch (error) {
    console.error('You do not have any favourite location yet!', error);
    return [];
  }
};

const initialState = loadFavouritesFromStorage();

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavouriteLocation: (state, action) => {
      state.favourites.push(action.payload); // Add location to favourites list
      console.log(state.favourites);
    },
    removeFavouriteLocation: (state, action) => {
      state.favourites = state.favourites.filter(favouriteLocation => {
	return (!(favouriteLocation.name === action.payload.name
		  && favouriteLocation.country === action.payload.country));
      });
    },
    toggleFavourite: (state, action) => {
      console.log('toggling of favourites now working');
      console.log(state.favourites);
    },
  }, // Closing brace for the reducers
});

export const { addFavouriteLocation, removeFavouriteLocation, toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
				   
