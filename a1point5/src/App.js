import React, { Component } from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";
import Canvas from "./components/canvas";

const appState = observable({
  text: "" // observable state
});

appState.onChange = function(e) { // action
  appState.text = e.target.value;
};

const storeInstance = {};

const App = observer(() => <Canvas store={storeInstance} />);

export default App;