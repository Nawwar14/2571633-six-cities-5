import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import { Provider } from 'react-redux';
import { store } from './store';
import {checkAuthAction, fetchOfferObjectAction} from './api-actions';
import { getToken } from './token';

store.dispatch(fetchOfferObjectAction);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(checkAuthAction(getToken()));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
