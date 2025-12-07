import { createContext, useState, useEffect } from 'react';


export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  return (
    <WeatherContext.Provider
      value={{weatherData, setWeatherData, apiError, setApiError, loadingData, setLoadingData}}>
      {children}
    </WeatherContext.Provider>
  );
}
