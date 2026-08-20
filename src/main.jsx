import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from 'virtual:vite-plugin-pwa/registerSW';

// Register PWA Service Worker immediately
registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
