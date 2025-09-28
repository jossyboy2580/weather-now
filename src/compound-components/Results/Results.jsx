import { DailyForecasts, HourlyForecasts } from '../../sections';

import { Weather } from '../../compound-components';

import './Results.css';

export default function Results() {
  return (
    <div className='results'>
      <div className='first-half'>
	<Weather />
	<DailyForecasts />
      </div>
      <HourlyForecasts />
    </div>
  );
}
