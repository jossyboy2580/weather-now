import './WeatherInfo.css';

import iconWeather from '../../assets/images/icon-sunny.webp';

export default function WeatherInfo() {
  return (
    <section className='weather-info'>
      <div className='weather-info__location-and-time'>
	<span className='weather-info__location'>Berlin Germany</span>
	<span className='weather-info__time'>Tuesday, Aug 5, 2025</span>
      </div>
      <div className='weather-info__main'>
	<img
	  src={iconWeather}
	  className='weather-info__icon'
	  alt='An icon of a sun representing the weather'/>
	<p className='weather-info__temp'>
	  68&deg;
	</p>
      </div>
    </section>
  );
}
