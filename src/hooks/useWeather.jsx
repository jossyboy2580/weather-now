import { fetchWeatherApi } from 'openmeteo';
import { WeatherContext } from '../contexts/WeatherContext';
import { useState, useEffect, useContext } from 'react';

export function useWeather(coords) {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://api.open-meteo.com/v1/forecast';

  useEffect(async () => {
    if (!coords || cords.length < 1) return;

    const longitude = String(coords.longitude);
    const latitude = String(coords.latitude);

    const params = {
      'latitude': latitude,
      'longitude': longitude,
      'current': ['temperature_2m', 'weather_code',
		  'precipitation', 'relative_humidity_2m',
		  'wind_speed_10m'],
      'hourly': ['temperature_2m', 'weather_code'],
      'daily': ['temperature_2m_max', 'temperature_2m_min', 'weather_code'],
    };

    try {
      setError('');
      setIsLoading(true);
      
      let response = await fetchWeatherApi(url, params);
      response = response[0];

      const current = response.current();
      const hourly = response.hourly();
      const daily = response.daily();
      const utcOffsetSeconds = response.utcOffsetSeconds();
      
      const weatherData = {
	current: {
	  time: new Date((Number(current.time()) + utcOffsetSeconds) + 1000),
	  temperature: current.variables(0).value(),
	  weather_code: current.variables(1).value(),
	  precipitation: current.variables(2).value(),
	  humidity: current.variables(3).value(),
	  wind_speed: current.variables(4).value(),
	},
	hourly: {
	  time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
	    (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
	  ),
	  temperatures: hourly.variables(0).valuesArray(),
	  weather_codes: hourly.variables(1).valuesArray(),
	},
	daily: {
	  time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
	    (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
	  ),
	  temperatures_max: daily.variables(0).valuesArray(),
	  temperatures_min: daily.variables(1).valuesArray(),
	  weather_codes: daily.variables(2).valuesArray(),
	}
      };

      setWeather(weatherData);
    } catch (err) {
      setError(err);
      return;
    } finally {
      setIsLoading(false);
    }  
  }, [coords]);
  
  return {weather, isLoading, error}
}

