import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@inject(["store"])
@observer
class Display extends Component {
  render() {
    return (
      <h1>Display {this.props.store.text} </h1>
    );
  }
}

export default Display;