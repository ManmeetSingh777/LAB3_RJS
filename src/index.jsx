import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import imageData from './components/ImageData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App lake={imageData}/>
  </React.StrictMode>
);

