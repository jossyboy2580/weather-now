import { DaysSelector } from '../../components';

import dropdownIcon from '../../assets/images/icon-dropdown.svg';

// Import temperature icons
import sunIcon from '../../assets/images/icon-sunny.webp';

// Import styles
import './HourlyForecasts.css';

export default function HourlyForecasts() {
  return (
    <section className='hourly-forecast'>
      <div className='hourly-forecast__section-head'>
	<h2 className='houly-forcast__section-title section-title'>Hourly forecast</h2>
	<DaysSelector />
      </div>
      <ul className='hourly-forecast__section-body hourly-forecast__list'>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>3 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>4 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>5 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>6 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>7 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>8 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>9 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
	<li className='hourly-forecast__item'>
	  <img src={sunIcon} className='hourly-forecast__icon'/>
	  <span className='hourly-forecast__day'>10 PM</span>
	  <span className='hourly-forecast__temp'>68&deg;</span>
	</li>
      </ul>
    </section>
  );
}
