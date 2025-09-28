import { useContext, useState, useEffect, useRef } from 'react';
import { LocationContext } from '../../contexts/LocationContext';

import './SearchForm.css';

export default function SearchForm() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState();
  const [cities, setCities] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef();

  const {location, setLocation } = useContext(LocationContext);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleFormSubmit = (e) => {

    e.preventDefault();
    console.log('This form has been submitted');
  }

  const handleSetLocation = (city) => {
    setLocation({
      longitude: city.longitude,
      latitude: city.latitude
    })
    console.log(location);
    setShowSuggestions(false);
    setSearchInput(`${city.name}, ${city.country}`);
  }

  useEffect(() => {

    if (!searchInput) return;
    
    const fetchCities = async () => {
      
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController(); // create a new abort controller
      
      setIsLoading(true);
      try {
	const response = await fetch(
	  `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`,
	  {
	    signal: abortControllerRef.current.signal
	  }
	);
	const data = await response.json();
	setCities(data.results);
      } catch (e) {
      } finally {
	setIsLoading(false);
      }
    }

    fetchCities();
    console.log(cities);

  }, [searchInput]);

  
  return (
    <section className="form-section">
      <form className="form" onSubmit={handleFormSubmit}>
	<div className='input-and-suggestions' >
	  <input
	    className="form__input"
	    placeholder="Search for a place…"
	    value={searchInput}
	    onChange={handleInputChange} />
	  {
	    (cities) && (
	      <ul className='suggestions-list'>
		{
		  cities.map(city => (
		    <li
		      onClick={() => handleSetLocation(city)}
		      key={city.id}
		      >
		      <span className='suggestion-item'>{`${city.name}, ${city.country}`}</span>
		    </li>
		  ))
		}
	      </ul>
	    )
	  }
	</div>
	<button className="form__button">Search</button>
      </form>
    </section>
  );
}
