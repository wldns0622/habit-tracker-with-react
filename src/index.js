import './index.css';
import '@fortawesome/fontawesome-free/js/all';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import SimpleHabit from './component/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);