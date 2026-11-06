import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. BrowserRouter import karein
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. App component ko BrowserRouter ke andar wrap karein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);