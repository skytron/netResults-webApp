import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Css rules to normalization
import 'normalize.css/normalize.css';
// Global css rules
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
