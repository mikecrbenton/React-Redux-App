import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// COMBINE REDUCERS EXAMPLE--------------
import { rootReducer } from './reducers'
// SINGLE REDUCER
//import { dogReducer } from './reducers/dogReducer';

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from 'redux-logger'

// **LOGGER HAS TO BE LAST** - ALWAYS
let store = createStore( rootReducer, applyMiddleware(thunk,logger) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
