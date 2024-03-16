import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const root = createRoot(document.querySelector('.header-nav'));
root.render(<App />);
