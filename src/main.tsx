import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign third-party embed warnings/errors (Elfsight/Instagram/Vimeo)
if (typeof window !== 'undefined') {
  const isBenignThirdPartyError = (msg?: string) => {
    if (!msg) return false;
    return (
      msg.includes('ResizeObserver') ||
      msg.includes('Instagram') ||
      msg.includes('Failed to fetch') ||
      msg.includes('elfsight') ||
      msg.includes('vimeo')
    );
  };

  window.addEventListener('error', (event) => {
    if (isBenignThirdPartyError(event.message)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason?.message || (typeof event.reason === 'string' ? event.reason : '');
    if (isBenignThirdPartyError(reason)) {
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
