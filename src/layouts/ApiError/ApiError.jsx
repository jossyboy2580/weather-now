import noDropIcon from '../../assets/images/icon-error.svg';
import retryIcon from '../../assets/images/icon-refresh.svg';

import './ApiError.css';

export default function ApiError() {
  return (
    <main className='api-error'>
      <img className='no-drop-icon' src={noDropIcon} />
      <h1 className='error-page-title'>Something went wrong</h1>
      <p className='error-page-details'>
	{`We couldn't connect to the server(API error). Please try again in a few moments.`}
      </p>
      <button className='retry-button'>
	<img className='retry-icon' src={retryIcon} />
	<span>Retry</span>
      </button>
    </main>
  );
}
