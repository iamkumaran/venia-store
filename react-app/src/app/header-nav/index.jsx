import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

// a Mutation Observer
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

// render react component
const initFn = elem => {
  if (elem) {
    const root = createRoot(elem);
    root.render(<App />);
  }
};

const elem = document.querySelector('.header-nav');
// direct render when element present in DOM.
if (elem) {
  initFn(elem);
} else {
  // if element not exist then use MutationObserver to render component
  onElementAvailable('.header-nav', initFn);
}
