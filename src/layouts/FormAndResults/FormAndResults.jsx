import { useEffect, useContext } from 'react';

import {getWeatherData} from '../../services/fetchWeather';

import {LocationContext} from '../../contexts/LocationContext';
import {WeatherContext} from '../../contexts/WeatherContext';

import { SearchForm } from '../../components';
import { Results } from '../../compound-components';

export default function FormAndResults() {
  const { location } = useContext(LocationContext);
  const { setWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (location) {
      const data = getWeatherData(location?.longitude, location?.latitude);
      if (data) {
	setWeatherData(data);
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
