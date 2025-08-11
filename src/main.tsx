import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Since we know the root element exists, we can safely assert it
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>
);