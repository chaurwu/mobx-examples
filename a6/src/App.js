import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Diagram from './diagram';

@inject(["store"])
@observer
class App extends Component {
  render() {
    return (
      <div>
        <Diagram />
      </div>
    );
  }
}

export default App;