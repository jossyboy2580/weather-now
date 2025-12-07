// This hook gets the current location of the user
import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [geoCoords, setGeoCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(new Error("Geolocation is not supported by this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
	setGeoCoords({
	  latitude: position.coords.latitude,
	});
      },
      (err) => setError(err)
    );
  }, []);

  return { geoCoords, error };
}
