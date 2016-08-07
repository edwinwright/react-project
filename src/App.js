import React from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './config/Routes';
import configureStore from './store/configStore'

const App = () => (
  <Provider store={configureStore()}>
    <Router history={ hashHistory }>
      {Routes}
    </Router>
  </Provider>
);

export default App
