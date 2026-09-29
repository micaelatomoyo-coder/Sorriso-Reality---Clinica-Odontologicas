import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign ResizeObserver loop warnings triggered by third-party embeds (Elfsight/Vimeo)
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (
      event.message?.includes('ResizeObserver loop completed with undelivered notifications') ||
      event.message?.includes('ResizeObserver loop limit exceeded') ||
      event.message?.includes('ResizeObserver')
    ) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
