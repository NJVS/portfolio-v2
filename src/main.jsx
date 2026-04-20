import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/styles/_index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const basename = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
