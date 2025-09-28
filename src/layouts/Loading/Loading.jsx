import { WeatherInfoSkeleton, WeatherDetailsSkeleton } from '../../sections';
import { DailyForecastsSkeleton, HourlyForecastsSkeleton } from '../../sections';

import './Loading.css';

export default function Loading() {
  return (
    <div className='loading'>
      <div className='right-side'>
	<div className='current-weather'>
	  <WeatherInfoSkeleton />
	  <WeatherDetailsSkeleton />
	</div>
	<DailyForecastsSkeleton />
      </div>
      <HourlyForecastsSkeleton />
    </div>
  );
}
