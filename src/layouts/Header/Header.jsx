import { useState, useRef, useEffect } from 'react';

// Components
import { UnitSwitcher } from '../../components';

// Icons
import logo from '../../assets/images/logo.svg';
import unitsIcon from '../../assets/images/icon-units.svg';
import dropdownIcon from '../../assets/images/icon-dropdown.svg';

// Styles
import './Header.css';

export default function Header() {

  const [showMetricOptions, setShowMetricOptions] = useState(false);
  const [units, setUnits] = useState({
    temperature: 'celcius',
    wind_speed: 'kmph',
    precipitation: 'inches'
  });

  const handleUnitSelection = () => {
  }
  
  return (
    <header className='header'>
      <div className='header-content'>
	<img className='logo' alt='Weather Now Logo' src={logo} />
	<UnitSwitcher />

      </div>
    </header>
  );
}
