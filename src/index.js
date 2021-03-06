import React from 'react';
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
