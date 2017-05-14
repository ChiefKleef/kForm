import './index.styl';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import formApp from './reducers/index.jsx';
import AppInterface from './AppInterface.jsx';

const store = createStore(
  formApp,
  applyMiddleware(logger),
);

const root = document.getElementById('AppInterface');
render(
  <Provider store={store}>
    <AppInterface />
  </Provider>, root);
