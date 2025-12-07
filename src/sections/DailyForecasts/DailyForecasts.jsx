import { useState, useEffect, useContext } from 'react';

import { WeatherContext } from '../../contexts/WeatherContext';
import './DailyForecasts.css';

import useIcon from '../../hooks/useIcon';

import icon from '../../assets/images/icon-rain.webp';

export default function DailyForecasts() {
  const [dailyForecasts, setDailyForecasts] = useState([])
  const { weatherData } = useContext(WeatherContext);
  const emptyListArray = Array.from({ length: 7 }, (_, i) => i + 1);

  const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function isMidnight(isoString) {
    const date = new Date(isoString);
    return date.getHours() === 0 && date.getMinutes() === 0;
  }
  

  useEffect(() => {
    let forecasts = [];
    const daily = weatherData.daily;
    const validDays = daily?.time.filter(tm => isMidnight(tm));
    const validDaysStrings = validDays?.map(day => (new Date(day).getDay()));
    if (validDaysStrings) {
      for (let i = 0; i < 7; i++) {
	forecasts.push({
	  day: daysArray[validDaysStrings[i]],
	  min: daily.temperatures_min[i],
	  max: daily.temperatures_max[i],
	  iconCode: daily.weather_codes[i]
	});
      }
    }
    
    setDailyForecasts(forecasts);
      
  }, [weatherData]);

  
  return (
    <section className='daily-forecasts'>
      <h2 className='section-title daily-forecasts__section-title'>Daily forecasts</h2>
      <ul className='daily-forecast__cards'>
	{
	  (dailyForecasts && dailyForecasts.length > 0) ?
	    dailyForecasts.map((forecast) => (
	      <li className='daily-forecast__card' key={forecast.day}>
		<span
		  className={`${!weatherData ? 'skeleton' : ''} daily-forecast__day`}>
		  {forecast.day}
		</span>
		<img
		  src={useIcon(forecast.iconCode)}
		  className={`${!weatherData ? 'skeleton' : ''} daily-forecast__icon`} />
		<div className='daily-forecast__temperatures'>
		  <span
		    className={`${!weatherData ? 'skeleton': ''}`}>
		    {Math.ceil(forecast.min)}&deg;
		  </span>
		  <span className={`${!weatherData ? 'skeleton' : ''}`}>
		    {Math.ceil(forecast.max)}&deg;
		  </span>
		</div>
	      </li>
	    ))
	    : emptyListArray.map(element => (
	      <li className='daily-forecast__card' key={element}>
		<span
		  className={`skeleton daily-forecast__day`}>
		  Mon
		</span>
		<img
		  src={icon}
		  className={`skeleton daily-forecast__icon`} />
		<div className='daily-forecast__temperatures'>
		  <span
		    className={`skeleton`}>
		    20
		  </span>
		  <span className={`skeleton`}>
		    20
		  </span>
		</div>
	      </li>
	    ))
	}
    </ul>
      </section>
  );
}


/*
	  
*/
