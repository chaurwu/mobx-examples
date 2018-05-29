import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class App extends Component {
  render() {
    const { text, onChange } = this.props.store;

  return (
    <div>
      Display: {text} <br />
      <input type="text" onChange={onChange} />
    </div>
  );
  }
}

export default App;