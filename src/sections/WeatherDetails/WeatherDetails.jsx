import { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import './WeatherDetails.css';

export default function WeatherDetails() {
  const { weatherData } = useContext(WeatherContext);
  const [weatherDetails, setWeatherDetails] = useState([]);

  useEffect(() => {
    setWeatherDetails(weatherData.current);
  }, [weatherData]);
  
  return (
    <section className="weather-details">
      <div className="weather-details__item weather-details__item--feels">
	<span className='weather-details__label'>Feels Like</span>
	<span className={`${!weatherDetails ? 'skeleton' : ''} weather-details__value`}>{Math.ceil(weatherDetails?.temperature)}°</span>
      </div>
      <div className="weather-details__item weather-details__item--humidity">
	<span className='weather-details__label'>Humidity</span>
	<span className={`${!weatherDetails ? 'skeleton': ''} weather-details__value`}>{Math.ceil(weatherDetails?.humidity)}%</span>
      </div>
      <div className="weather-details__item weather-details__item--wind">
	<span className='weather-details__label'>Wind</span>
	<span className={`${!weatherDetails ? 'skeleton': ''} weather-details__value`}>{Math.ceil(weatherDetails?.wind_speed)} km/h</span>
      </div>
      <div className="weather-details__item weather-details__item--precip">
	<span className='weather-details__label'>Precipitation</span>
	<span
	  className={`${!weatherDetails ? 'skeleton': ''} weather-details__value`}>
	  {Math.ceil(weatherDetails?.precipitation)} mm
	</span>
      </div>
    </section>
  );
}
