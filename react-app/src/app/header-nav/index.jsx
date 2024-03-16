import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

function onElementAvailable(selector, callback) {
  const observer = new MutationObserver(mutations => {
    const elem = document.querySelector(selector);
    if (elem) {
      observer.disconnect();
      callback(elem);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

onElementAvailable('.header-nav', elem => {
  if (elem) {
    const root = createRoot(elem);
    root.render(<App />);
  }
});
