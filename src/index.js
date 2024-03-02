import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Toaster} from 'react-hot-toast'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);


reportWebVitals();
