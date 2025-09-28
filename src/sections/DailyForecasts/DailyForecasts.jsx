import { useState } from 'react';
import './DailyForecasts.css';

// Import icons
import iconSunny from '../../assets/images/icon-sunny.webp';

export default function DailyForecasts() {
  const loading = false;
  
  const fakeDailyForecasts = [
    {
      day: 'Mon',
      temp: {
	high: 20,
	low: 14
      }
    },
    {
      day: 'Tue',
      temp: {
	high: 21,
	low: 15
      }
    },
    {
      day: 'Wed',
      temp: {
	high: 24,
	low: 14
      }
    },
    {
      day: 'Thu',
      temp: {
	high: 25,
	low: 13
      }
    },
    {
      day: 'Fri',
      temp: {
	high: 21,
	low: 15
      }
    },
    {
      day: 'Sat',
      temp: {
	high: 25,
	low: 16
      }
    },
    {
      day: 'Sun',
      temp: {
	high: 24,
	low: 15
      }
    },
  ]
  
  return (
    <section className='daily-forecasts'>
      <h2 className='section-title daily-forecasts__section-title'>Daily forecasts</h2>
      { fakeDailyForecasts && (
	<ul className='daily-forecast__cards'>
	  { fakeDailyForecasts.map(forecast => (
	    <li className='daily-forecast__card' key={forecast.day}>
	      <span
		className={`${loading ? 'skeleton' : ''} daily-forecast__day`}>
		{loading ? 'loading' : forecast.day}
	      </span>
	      <img src={iconSunny} className={`${loading ? 'skeleton' : ''} daily-forecast__icon`} />
	      <div className='daily-forecast__temperatures'>
		<span
		  className={`${loading ? 'skeleton': ''}`}>
		  {loading ? 'loading' : forecast.temp.high}&deg;
		</span>
		<span className={`${loading ? 'skeleton' : ''}`}>
		  {loading ? 'loading' : forecast.temp.low}&deg;
		</span>
	      </div>
	    </li>
	  ))}
	</ul>
      )
      }
    </section>
  );
}


