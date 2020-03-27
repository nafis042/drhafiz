// styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.scss';
//
import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Store from './store';
//
import App from './app/App';

const store = createStore(Store);

window.onload = () => {
  
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};
serviceWorker.unregister();
