import dropdownIcon from '../../assets/images/icon-dropdown.svg';

import './HourlyForecastsSkeleton.css';

export default function HourlyForecastsSkeleton() {
  return (
    <section className='hourly-forecasts-skeleton'>
      <div className='hourly-forecast-skeleton__section-head'>
	<h2 className='houly-forcast-skeleton__section-title section-title'>Hourly forecast</h2>
	<div
	className='days-selector-skeleton__button'
	onClick={() => setShowOptions(!showOptions)}>
	<span className='days-selector-skeleton__selected-day'>-</span>
	<img className='dropdown-arrow' src={dropdownIcon} />
      </div>
      </div>
      <ul className='hourly-forecast-skeleton__section-body hourly-forecast__list'>
	<li className='hourly-forecast-skeleton__item'>
	</li>
	<li className='hourly-forecast-skeleton__item'>
	</li>
	<li className='hourly-forecast-skeleton__item'>
	</li>
	<li className='hourly-forecast-skeleton__item'>
	</li>
	<li className='hourly-forecast-skeleton__item'>
	</li>
	<li className='hourly-forecast-skeleton__item'>
	</li>
	<li className='hourly-forecast-skeleton__item'>
	</li>
      </ul>
    </section>
  );
}
