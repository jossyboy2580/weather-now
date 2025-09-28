import { createContext, useEffect, useState } from 'react';

export const UnitsContext = createContext();

export default function UnitsProvider({ children }) {

  const [units, setUnits] = useState({
    temperature: 'celcius',
    precipitation: 'inches',
    wind_speed: 'mph'
  });
  
  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
}
