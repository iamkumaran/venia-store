import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

export default function decorate(block) {
  const root = createRoot(block);
  root.render(<App />);
}
