import { useState } from 'react';

import UnitsIcon from '../../assets/images/icon-units.svg';
import DropdownIcon from '../../assets/images/icon-dropdown.svg';
import './UnitSwitcher.css';

export default function UnitSwitcher() {
  const [showUnits, setShowUnits] = useState(false);
  
  return (
    <div className='units-switcher'>
      <button type='button' className='units-switcher-button'>
	<img src={UnitsIcon} alt='units icon' />
	<span>Units</span>
	<img src={DropdownIcon} alt='dropdown icon' />
      </button>
      <div className='units-switcher-options'>
	
      </div>
    </div>
  );
}
