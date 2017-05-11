import './index.styl';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import formApp from './reducers/index.jsx';
import AppInterface from './AppInterface.jsx';

const store = createStore(
  formApp
);

const root = document.getElementById('AppInterface')
render( 
  <Provider store={store}>
    <AppInterface / >
  </Provider>, root);