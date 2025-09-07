import { useState } from 'react';

import UnitsIcon from '../../assets/images/icon-units.svg';
import DropdownIcon from '../../assets/images/icon-dropdown.svg';
import './UnitSwitcher.css';

export default function UnitSwitcher() {
  const [showUnitsOptions, setShowUnitsOptions] = useState(false);

  const toggleShowUnitsOptions = () => {
    setShowUnitsOptions(!showUnitsOptions);
  }
  
  return (
    <div className='units-switcher'>
      <button type='button' className='units-switcher-button' onClick={toggleShowUnitsOptions}>
	<img src={UnitsIcon} alt='units icon' />
	<span>Units</span>
	<img src={DropdownIcon} alt='dropdown icon' />
      </button>
      { showUnitsOptions && (
	<div className='units-switcher-options'>
	  Units Options are being shown
	  
	  <fieldset className=''>
	    <legend>Temperature</legend>
	    <div className='form-group'>
	      <label htmlFor='celcius'>Celcius(C)</label>
	      <input type='radio' name='temperature' id ='celcius' value='celcius' />
	    </div>
	    <div className='form-group'>
	      <label htmlFor='fahrenheit'>Fahrenheit(F)</label>
	      <input type='radio' name='temperature' id ='fahrenheit' value='fahrenheit' />
	    </div>
	  </fieldset>

	  <fieldset className=''>
	    <legend>Wind Speed</legend>
	    <div className='form-group'>
	      <label htmlFor='kmph'>km/h</label>
	      <input type='radio' name='wind_speed' id ='kmph' value='kmph' />
	    </div>
	    <div className='form-group'>
	      <label htmlFor='mph'>mph</label>
	      <input type='radio' name='wind_speed' id ='mph' value='mph' />
	    </div>
	  </fieldset>

	  <fieldset className=''>
	    <legend>Precipitation</legend>
	    <div className='form-group'>
	      <label htmlFor='millimeters'>Millimeters</label>
	      <input type='radio' name='precipitation' id ='millimeters' value='millimeters' />
	    </div>
	    <div className='form-group'>
	      <label htmlFor='inches'>Inches(in)</label>
	      <input type='radio' name='precipitation' id ='inches' value='inches' />
	    </div>
	  </fieldset>
	</div>
      )}
    </div>
  );
  
}
