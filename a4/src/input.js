import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@inject(["store"])
@observer
class Input extends Component {
  render() {
    const { onChange } = this.props.store;
    return (
      <input type="text" onChange={onChange} />
    );
  }
}

export default Input;