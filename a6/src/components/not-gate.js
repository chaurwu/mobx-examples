import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class NotGate extends Component {
  render() {
    return (
<svg className="logic-gate" viewBox="0 0 100 50">
  <path fill="none" stroke="#000" strokeWidth="2" d="M79.15691 25H95M29.043478 25h-24"/>
  <path d="M28.96875 2.59375v44.8125l2.15625-1.0625 41.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3 4.8125L68.09375 25l-36.125 17.59375V7.40625z" style={{marker:'none'}}/>
  <path fill="none" stroke="#000" strokeWidth="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"  style={{marker:'none'}}/>
</svg>
    );
  }
}

export default NotGate;
