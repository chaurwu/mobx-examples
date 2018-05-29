import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Node from './node';

@inject(["store"])
@observer
class Canvas extends Component {
  render() {
    const diagram = this.props.store;
    const nodes = diagram.nodes.map((node) => <Node key={node.id} node={node} />)
    return (
      <div id="canvas">
        {nodes}
      </div>
    );
  }
}

export default Canvas;