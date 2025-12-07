import { useState } from 'react';

import SuggestionsList from '../SuggestionsList/SuggestionsList';
import SearchForm from '../SearchForm/SearchForm';

export default function SearchFormAndSuggestions() {
  const [cities, setCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  
  const abortControllerRef = useRef();
  const cityQueryRef = useRef();

  const handleSetLocation = (city) => {
    // dispatch to the currentLocation state
    dispatch(setCurrentLocation(
      {
	name: city.name,
	country: city.country,
	longitude: city.longitude,
	latitude: city.latitude,
	timezone: city.timezone,
      }
    ));
    
    setShowSuggestions(false);
    setSearchInput('');
  }

  // useEffect to fetch a list of cities when the input changes
  useEffect(() => {

    if (!searchInput) return;
    
    const fetchCities = async () => {
      
      abortControllerRef.current?.abort();
      
      // create a new abort controller and assign to reference
      abortControllerRef.current = new AbortController(); 

      setShowSuggestions(false);
      setIsLoading(true);
      try {
	const response = await fetch(
	  `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`,
	  {
	    signal: abortControllerRef.current.signal
	  }
	);
	const data = await response.json();
	setCities(data.results.splice(0,4));
	setShowSuggestions(true);
      } catch (e) {
      } finally {
	setIsLoading(false);
      }
    }

    fetchCities();

  }, [searchInput]);

  return (
    <section className='search-form-and-suggestions'>
      <form className="form" ref={cityQueryRef}>
	<input
	  name='place'
	  className="form__input"
	  placeholder="Search for a place…"
	  value={searchInput}
	  onChange={(e) => setSearchInput(e.target.value)}
	/>
	  <button className="form__button">Search</button>
	  
	  {/* Loading for when the list of cities are being fetched */}
	  { isLoading && (
	    <p>Cities are loading <p/>
	  )}
    
	  {/* Suggestions */}
	  { (cities && showSuggestions && !isLoading) && (
	    <SuggestionsList cities={ cities } />
	  )}
      </form>
    </section>
  );
}
