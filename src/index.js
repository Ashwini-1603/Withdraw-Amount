import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store/store';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
