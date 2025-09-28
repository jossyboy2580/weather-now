import { createContext, useState } from 'react';

export const WeatherContext = createContext();


export default function WeatherProvider({ children }) {
  const [weather, setWeather] = useState({});

  return (
    <WeatherContext.Provider value={{weather, setWeather}}>
      {children}
    </WeatherContext.Provider>
  );
}
