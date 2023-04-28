import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

import App from './client/App';
import './index.css';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App />
  </StrictMode>
);
