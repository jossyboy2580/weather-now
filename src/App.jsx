import logo from './assets/images/logo.svg';
import './App.css'

// icons
import unitsIcon from './assets/images/icon-units.svg';
import dropdownIcon from './assets/images/icon-dropdown.svg';
import sunIcon from './assets/images/icon-sunny.webp';

function App() {
  return (
    <>
      <header className='header'>
	<div className='header-content wrapper'>
	  <img className='logo' alt='Weather Now Logo' src={logo} />
	  <div className='units-switcher'>
	    <button className='units-switcher-toggle'>
	      <img src={unitsIcon} />
	      <span>Units</span>
	      <img src={dropdownIcon} />
	    </button>
	    <div className='units-switcher-options'>
	    </div>
	  </div>
	</div>
      </header>
      
      <main className='main'>
	<div className='wrapper'>
	  
	  <section className="hero">
	    <h1 className="hero__title">How’s the sky looking today?</h1>
	    <form className="hero__form">
	      <input className="hero__input" placeholder="Search for a place…" />
	      <button className="hero__button">Search</button>
	    </form>
	  </section>
	  
	  <div className='grid-layout'>
	    <section className='current-weather'>
	      <div className='current-weather__location-and-time'>
		<h2 className='current-weather__location'>Berlin, Germany</h2>
		<p className='current-weather__date'>Tuesday, Aug 5, 2025</p>
	      </div>
	      <div className='current-weather__main'>
		<img src={sunIcon}  className='current-weather__icon'/>
		<span className='current-weather__temp'>68°</span>
	      </div>
	    </section>
	    
	    <section className="weather-stats">
	      <div className="weather-stats__item weather-stats__item--feels">
		<span>Feels Like</span>
		<span>18°</span>
	      </div>
	      <div className="weather-stats__item weather-stats__item--humidity">
		<span>Humidity</span>
		<span>46%</span>
	      </div>
	      <div className="weather-stats__item weather-stats__item--wind">
		<span>Wind</span>
		<span>14 km/h</span>
	      </div>
	      <div className="weather-stats__item weather-stats__item--precip">
		<span>Precipitation</span>
		<span>0 mm</span>
	      </div>
	    </section>
	    
	    <section className="daily-forecast">
	      <article className="daily-forecast__card">
		<span className="daily-forecast__day">Tue</span>
		<span className="daily-forecast__icon">🌧</span>
		<span className="daily-forecast__temp">20° / 14°</span>
	      </article>
	    </section>
	    
	  </div>
	  
	  <section className="hourly-forecast">
	    <div className='hourly-forecast-section-head'>
	      <h2>Hourly forecast</h2>
	      <select name='day' id='day-selector' className='day-selector'>
		<option value='sunday'>Sunday</option>
		<option value='monday'>Monday</option>
		<option value='tuesday'>Tuesday</option>
		<option value='wednesday'>Wednesday</option>
		<option value='thursday'>Thursday</option>
		<option value='friday'>Friday</option>
		<option value='saturday'>Saturday</option>
	      </select>
	    </div>
	    <div className="hourly-forecast__item">
	      <span className="hourly-forecast__icon">☁️</span>
	      <span className="hourly-forecast__time">3 PM</span>
	      <span className="hourly-forecast__temp">20°</span>
	    </div>
	  </section>
	</div>
      </main>
    </>
  )
}

export default App
