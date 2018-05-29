import React, { Component } from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class App extends Component {
  @observable text = "";
  
  render() {
    return (
      <div>
        Display: {this.text} <br />
        <input type="text" onChange={e => (this.text = e.target.value)} />
      </div>
    );
  }
}

export default App;