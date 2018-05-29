import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Display from './display';
import Input from './input';

@inject(["store"])
@observer
class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <br />
        <Input />
      </div>
    );
  }
}

export default App;