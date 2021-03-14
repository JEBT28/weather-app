import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import './assets/tailwind.css'
import WeatherApp from './WeatherApp';

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById('root')
);

