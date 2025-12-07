import { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useWeather } from './hooks/useWeather';
import { useCoords } from './contexts/CoordsContext';
import './App.css'
import { WeatherContext } from './contexts/WeatherContext';
import { LocationContext } from './contexts/LocationContext';

import { getWeatherData } from './services/fetchWeather';


// Layouts
import { ApiError, Header, FormAndResults, MainQuestion } from './layouts';


function App() {
  const currentLocation = useSelector((state) => state.currentLocaton);

  /* 
TODO: Access the location redux state and make a call to the weather api for weather information
you can now set the weather state that can be utilized by all the sections from within this place

this should be attended to the next time you come online ......

do not be a lazy programmer
*/

  useEffect(() => {

    /* 
       Define a function that always fetches the information
       whenever the coordinates changes
    */
    const weatherCaller = async () => {
      if (currentLocation) {
	try {
	  setApiError(null);
	  const weather = await getWeatherData({
	    longitude: currentLocation.longitude,
	    latitude: currentLocation.latitude
	  });
	  setWeatherData(weather);
	} catch (err) {
	  setApiError(err);
	}
      }
    }

    weatherCaller();
  }, [currentLocation]);
    
  return (
    <div className='container'>
      <Header />
      {
	!apiError ? (
	<>
	  <MainQuestion text={"How's the sky looking today"}/>
	  <FormAndResults/>
	</>
	) : (
	  <ApiError />
	)
      }
    </div>
  );
}


export default App
