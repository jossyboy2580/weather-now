import { useState, useEffect, useRef } from 'react';

import dropdownIcon from '../../assets/images/icon-dropdown.svg';

import './DaysSelector.css';

export default function DaysSelector() {
  const days = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [showOptions, setShowOptions] = useState(false);
  const daysSelectorRef = useRef();

    // This useEffect captures the escape key to enable closing of the menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
	setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
  }, [showOptions]);

    /* 
     This useEffect listens for clicks outside the dropdown menu
  */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (daysSelectorRef.current && !daysSelectorRef.current.contains(e.target)) {
	setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
  }, [showOptions]);
  
  return (
    <div className='days-selector' ref={daysSelectorRef}>
      <button
	className='days-selector__button'
	onClick={() => setShowOptions(!showOptions)}>
	<span className='days-selector__selected-day'>{selectedDay}</span>
	<img className='dropdown-arrow' src={dropdownIcon} />
      </button>
      { showOptions && (
	<ul className='days-selector__options'>
	  {
	    days.map((day, index) => (
	      <li
		key={index}
		className='days-selector__option'
		onClick={() => setSelectedDay(day)}
		>
		{day}
	      </li>
	    )
		    )
	  }
	</ul>
      )
      }
    </div>
  );
}
