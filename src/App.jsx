import { useState } from 'react';
import logo from './assets/images/logo.svg';
import './App.css'

// Layouts
import { Header, FormAndResults, ApiError, MainQuestion } from './layouts';

function App() {
    
  return (
    <div className='container'>
      <Header />
      <MainQuestion text={"How's the sky looking today"}/>
      <FormAndResults/>
    </div>
  );
}


export default App
