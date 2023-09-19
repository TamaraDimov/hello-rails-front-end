import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();
