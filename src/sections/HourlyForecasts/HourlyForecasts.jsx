import { useContext, useState, useEffect } from 'react';
import { DaysSelector } from '../../components';
import { WeatherContext } from '../../contexts/WeatherContext';

import { setCurrentLocation } from '../../redux/locationSlice';

import useIcon from '../../hooks/useIcon';

import dropdownIcon from '../../assets/images/icon-dropdown.svg';

// Import temperature icons
import sunIcon from '../../assets/images/icon-sunny.webp';

// Import styles
import './HourlyForecasts.css';

export default function HourlyForecasts() {
  const { weatherData } = useContext(WeatherContext);
  const [hourlyForecastsData, setHourlyForecastsData] = useState(null);
  const [flattenedData, setFlattenedData] = useState(null);

  const daysArray = ['Sunday','Monday', 'Tuesday', 'Wednesday',
		     'Thursday', 'Friday', 'Saturday']

  const sortHourlyForecastsObjectBasedOnDay = (flattenedData) => {
    const sorted = {};

    flattenedData?.forEach(dataObj => {
      if (!sorted.hasOwnProperty(daysArray[dataObj.time.toDate()])) {
	sorted[daysArray[dataObj.time.toDate()]] = [dataObj]
      } else {
	sorted[daysArray[dataObj.time.toDate()]].push(dataObj)
      }
    })

    console.log(sorted)
  }

  useEffect(() => {
    if (weatherData && Object.keys(weatherData).length > 0) {
      setHourlyForecastsData(weatherData.hourly);
    }
  }, [weatherData]);

  useEffect(() => {
    if (hourlyForecastsData) {
      setFlattenedData(hourlyForecastsData.time.map((time, ind) => ({
	time: new Date(time) ,
	temp: hourlyForecastsData.temperatures[ind],
	code: hourlyForecastsData.weather_codes[ind],})))
    }

    sortHourlyForecastsObjectBasedOnDay(flattenedData)
  }, [hourlyForecastsData]);
  
  return (
    <section className='hourly-forecast'>
      <div className='hourly-forecast__section-head'>
	<h2 className='houly-forcast__section-title section-title'>Hourly forecast</h2>
	<DaysSelector />
      </div>
      <ul className='hourly-forecast__section-body hourly-forecast__list'>
	{(flattenedData && flattenedData.length > 0) && flattenedData.map(data => (
	  <li key={data.time} className='hourly-forecast__item'>
	    <img src={useIcon(data.code)} className='hourly-forecast__icon'/>
	    <span className='hourly-forecast__day'>{data.time.toLocaleString('en-US', {hour: 'numeric', hour12: true})}</span>
	    <span className='hourly-forecast__temp'>{Math.ceil(data.temp)}&deg;</span>
	  </li>
	))}
      </ul>
    </section>
  );
}
