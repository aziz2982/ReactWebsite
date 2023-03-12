import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='mainwrapper1'>
      <Root />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

