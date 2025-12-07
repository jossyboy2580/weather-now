import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WeatherContext } from '../../contexts/WeatherContext';
import { LocationContext } from '../../contexts/LocationContext';

import { toggleFavourite } from '../../redux/favouritesSlice';

import useIcon from '../../hooks/useIcon';

import heartIcon from '../../assets/images/icon-heart.svg';

import './WeatherInfo.css';

// weather icons 
import iconSunny from '../../assets/images/icon-sunny.webp';
import iconDrizzle from '../../assets/images/icon-drizzle.webp';
import iconFog from '../../assets/images/icon-fog.webp';
import iconOvercast from '../../assets/images/icon-overcast.webp';
import iconPartlyCloudy from '../../assets/images/icon-partly-cloudy.webp';
import iconRain from '../../assets/images/icon-rain.webp';
import iconSnow from '../../assets/images/icon-snow.webp';
import iconStorm from '../../assets/images/icon-storm.webp';


export default function WeatherInfo() {
  const favourites = useSelector((state) => state.favourites);
  const { weatherData } = useContext(WeatherContext);
  const { location } = useContext(LocationContext);
  const [currentInfo, setCurrentInfo] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const dispatch = useDispatch();
  
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    if (weatherData && Object.keys(weatherData).length > 0) {
      setCurrentInfo(weatherData.current);
    }
  }, [weatherData]);

  useEffect(() => {
    if (currentInfo) {
      const now = new Date(currentInfo?.time);
      const day = daysOfTheWeek[now.getDay()];
      const month = now.getMonth();
      const date = now.getDate();
      const year = now.getFullYear();

      
    }
  }, [currentInfo]);
  
  return (
    <section className={`${!currentInfo ? 'skeletonContainer' : ''} weather-info`}>
      <button
	onClick={() => dispatch(toggleFavourite({ 'that': 'that', 'this': 'this' }))}
	className='favourite-button'>
      <svg
	width="30"
	height="30"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	className='favourite-icon favourite'>
	<path
	  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
	  />
      </svg>
      </button>
      <div className='weather-info__location-and-time'>
	<span
	  className={`${!currentInfo && 'skeleton'} weather-info__location`}>{location ? location : ''}</span>
	<span className={`${!currentInfo && 'skeleton'} weather-info__time`}>{'tme'}</span>
      </div>
      <div className='weather-info__main'>
	<img
	  src={useIcon(currentInfo?.weather_code)}
	  className={`${!currentInfo && 'skeleton'} weather-info__icon`}
	  alt='An icon of a sun representing the weather'/>
	<p className={`${!currentInfo && 'skeleton'} weather-info__temp`}>
	  {Math.ceil(currentInfo?.temperature)}&deg;
	</p>
      </div>
    </section>
  );
}
