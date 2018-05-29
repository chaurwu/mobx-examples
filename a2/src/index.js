import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { appState } from './store';

ReactDOM.render(<App store={appState} />, document.getElementById("root"));