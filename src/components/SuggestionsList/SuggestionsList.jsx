export default function SuggestionsList({ cities }) {

  return (
    <ul className='suggestions-list'>
      {
	(cities && showSuggestions) && cities.map(city => (
	  <li
	    onClick={() => handleSetLocation(city)}
	    key={city.id}
	    >
	    <span className='suggestion-item'>{`${city.name}, ${city.country}`}</span>
	  </li>
	))
      }
    </ul>
  );
}
