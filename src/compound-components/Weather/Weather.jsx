import { WeatherInfo, WeatherDetails } from '../../sections';

import './Weather.css';

export default function Weather() {
  return (
    <div className='weather'>
      <WeatherInfo />
      <WeatherDetails />
    </div>
  );
}
