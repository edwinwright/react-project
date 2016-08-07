import React from 'react';
import { createStore } from 'redux';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './config/Routes';
import reducer from './reducers/index';

let store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router history={ hashHistory }>
      {Routes}
    </Router>
  </Provider>
);

export default App
