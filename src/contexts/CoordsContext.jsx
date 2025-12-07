import { createContext, useContext, useState, useEffect } from 'react';
import { LocationContext } from './LocationContext';

const CoordsContext = createContext();

export default function CoordsProvider({ children }) {
  const [coords, setCoords] = useState(null);
  const { setLocation } = useContext(LocationContext)

  // Set initial coords from geolocation
  useEffect(() => {

    const getCityFromLocation = async (coords) => {
      if (coords) {
	try {
	  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`);
	  const data = await response.json();
	  setLocation(
	    `${data.address.city || data.address.town || data.address.village}, ${data.address.country}`
	  )
	} catch (err) {
	  console.log(err);
	}
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
	(position) => {
	  const location = {
	    longitude: position.coords.longitude,
	    latitude: position.coords.latitude
	  };
	  setCoords(location);
	  getCityFromLocation(location);
	}, (err) => {
	  setCoords(null);
	}
      );
    }

    getCityFromLocation(coords);
  }, []);
  
  return (
    <CoordsContext.Provider value={{ coords, setCoords}}>
      {children}
    </CoordsContext.Provider>
  );
}

export function useCoords() {
  return useContext(CoordsContext);
}
