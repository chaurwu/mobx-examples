import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@observer
class Node extends Component {
  render() {
    const { node } = this.props;
    return (
      <h2>{ node.name }</h2>
    );
  }
}

export default Node;