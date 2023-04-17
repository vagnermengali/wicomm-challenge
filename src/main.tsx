import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App';

import { GlobalStyles, ResetCSS } from "@/style/global";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <BrowserRouter>
          <GlobalStyles />
          <ResetCSS />
          <App />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>,
)
