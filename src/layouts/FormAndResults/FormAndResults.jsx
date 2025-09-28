import { useEffect, useContext } from 'react';

import {getWeatherData} from '../../services/fetchWeather';

import {LocationContext} from '../../contexts/LocationContext';
import {WeatherContext} from '../../contexts/WeatherContext';

import { SearchForm } from '../../components';
import { Results } from '../../compound-components';

export default function FormAndResults() {
  const { location } = useContext(LocationContext);
  const { setWeather } = useContext(WeatherContext);

  useEffect(() => {
    if (location) {
      const weather = getWeatherData(location?.longitude, location?.latitude);
      if (weather) {
	setWeather(weather);
      } else {
	return;
      }
    }
  }, [location]);
  
  return (
    <main className='form-and-results'>
      <SearchForm />
      <Results />
    </main>
  );
}
