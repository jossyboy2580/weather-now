import './WeatherDetails.css';

export default function WeatherDetails() {
  return (
    <section className="weather-details">
      <div className="weather-details__item weather-details__item--feels">
	<span className='weather-details__label'>Feels Like</span>
	<span className='weather-details__value'>18°</span>
      </div>
      <div className="weather-details__item weather-details__item--humidity">
	<span className='weather-details__label'>Humidity</span>
	<span className='weather-details__value'>46%</span>
      </div>
      <div className="weather-details__item weather-details__item--wind">
	<span className='weather-details__label'>Wind</span>
	<span className='weather-details__value'>14 km/h</span>
      </div>
      <div className="weather-details__item weather-details__item--precip">
	<span className='weather-details__label'>Precipitation</span>
	<span className='weather-details__value'>0 mm</span>
      </div>
    </section>
  );
}
