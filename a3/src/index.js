import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { appState } from './store';
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider store={appState}>
    <App />
  </Provider>,
  document.getElementById('root'));