import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './src/HomePage.jsx';
import './src/index.css'; // Assuming Tailwind is setup in this file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
