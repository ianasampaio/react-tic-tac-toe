import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/settings/colors.css'
import './styles/generic/reset.css';
import './styles/elements/base.css' 
import Navbar from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
reportWebVitals();
