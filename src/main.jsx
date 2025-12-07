import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './reset.css'
import './index.css'
import App from './App.jsx'
import store from './redux/store';

import { Provider } from 'react-redux';
import UnitsProvider from './contexts/UnitsContext';
import LocationProvider from './contexts/LocationContext';
import WeatherProvider from './contexts/WeatherContext';
import CoordsProvider from './contexts/CoordsContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
	<LocationProvider>
	  <CoordsProvider>
	    <WeatherProvider>
	      <UnitsProvider>
		<App />
	      </UnitsProvider>
	    </WeatherProvider>
	  </CoordsProvider>
	</LocationProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
