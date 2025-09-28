import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './reset.css'
import './index.css'
import App from './App.jsx'

import UnitsProvider from './contexts/UnitsContext';
import LocationProvider from './contexts/LocationContext';
import WeatherProvider from './contexts/WeatherContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
	<LocationProvider>
	  <UnitsProvider>
	    <App />
	  </UnitsProvider>
	</LocationProvider>
      </WeatherProvider>
    </QueryClientProvider>
  </StrictMode>,
)
