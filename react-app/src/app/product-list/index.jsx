import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const elem = document.querySelector('.product-list');
if (elem) {
  const root = createRoot(elem);
  root.render(<App />);
}
