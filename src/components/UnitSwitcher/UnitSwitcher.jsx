import { useState, useContext, useEffect, useRef } from 'react';

// Icons
import unitsIcon from '../../assets/images/icon-units.svg';
import dropdownIcon from '../../assets/images/icon-dropdown.svg';

// Styles
import './UnitSwitcher.css';

// Context
import { UnitsContext } from '../../contexts/UnitsContext';

export default function UnitSwitcher() {
  
  const [showUnitsOptions, setShowUnitsOptions] = useState(false);
  const [unitsType, setUnitsType] = useState('imperial');
  const { units, setUnits } = useContext(UnitsContext);
  const dropdownRef = useRef();


  const toggleShowUnitsOptions = () => {
    setShowUnitsOptions(!showUnitsOptions);
  }

  const handleUnitChange = (e) => {
    setUnits({...units, [e.target.name]: e.target.value});
  }

  const handleMetricToggle = () => {
    if (unitsType == 'imperial') {
      setUnitsType('metric');
    } else {
      setUnitsType('imperial');
    }
  }

  useEffect(() => {
    if (unitsType == 'imperial') {
      setUnits({
	temperature: 'fahrenheit',
	wind_speed: 'mph',
	precipitation: 'inches'
      });
    } else {
      setUnits({
	temperature: 'celcius',
	wind_speed: 'kmph',
	precipitation: 'millimeters'
      });
    }
  }, [unitsType]);

  // This useEffect captures the escape key to enable closing of the menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
	setShowUnitsOptions(false);
      }
    };

    if (showUnitsOptions) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
  }, [showUnitsOptions]);

  /* 
     This useEffect listens for clicks outside the dropdown menu
  */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
	setShowUnitsOptions(false);
      }
    };

    if (showUnitsOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
  }, [showUnitsOptions]);

  return (
    <div className='units-switcher' ref={dropdownRef}>
      <button
	className='units-switcher-toggle'
	onClick={() => setShowUnitsOptions(!showUnitsOptions)}>
	<img src={unitsIcon} />
	<span>Units</span>
	<img
	  src={dropdownIcon} className={`${showUnitsOptions ? 'metric-shown' : ''}`} />
      </button>
      { showUnitsOptions && (
	<div className='units-switcher-options'>
	  <button
	    className='metric-toggle'
	    onClick={handleMetricToggle}>
	    {`${unitsType == 'imperial' ? 'Switch to Metric' : 'Switch to Imperial'}`}
	  </button>
	  <fieldset className='opt-group'>
	    <legend className='metric-label'>Temperature</legend>
	    <div className='input-options'>
	      <div className='form-group celcius'>
		<label htmlFor='celcius'>Celcius(°C)</label>
		<input type='radio' name='temperature' id='celcius' value='celcius' checked={units.temperature == 'celcius'} onChange={handleUnitChange} />
	      </div>
	      <div className='form-group fahrenheit'>
		<label htmlFor='fahrenheit'>Fahrenheit(°F)</label>
		<input type='radio' name='temperature' id='fahrenheit' value='fahrenheit' checked={units.temperature == 'fahrenheit'} onChange={handleUnitChange} />
	      </div>
	    </div>
	  </fieldset>
	  <hr />
	  <fieldset className='opt-group'>
	    <legend className='metric-label'>Wind Speed</legend>
	    <div className='input-options'>
	      <div className='form-group kmph'>
		<label htmlFor='kmph'>km/h</label>
		<input type='radio' name='wind_speed' id='kmph' value='kmph' checked={units.wind_speed == 'kmph'} onChange={handleUnitChange} />
	      </div>
	      <div className='form-group mph'>
		<label htmlFor='mph'>mph</label>
		<input type='radio' name='wind_speed' id='mph' value='mph' checked={units.wind_speed == 'mph'} onChange={handleUnitChange} />
	      </div>
	    </div>
	  </fieldset>
	  <hr />
	  <fieldset className='opt-group'>
	    <legend className='metric-label'>Precipitation</legend>
	    <div className='input-options'>
	      <div className='form-group millimeters'>
		<label htmlFor='millimeters'>Millimeters(mm)</label>
		<input type='radio' name='precipitation' id='millimeters' value='millimeters' checked={units.precipitation == 'millimeters'} onChange={handleUnitChange} />
	      </div>
	      <div className='form-group inches'>
		<label htmlFor='inches'>Inches(in)</label>
		<input type='radio' name='precipitation' id='inches' value='inches' checked={units.precipitation == 'inches'} onChange={handleUnitChange} />
	      </div>
	    </div>
	  </fieldset>
	</div>
      )
      }
    </div>
  );
  
}
