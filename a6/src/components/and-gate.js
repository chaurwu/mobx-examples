import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class AndGate extends Component {
  render() {
    return (
<svg className="logic-gate" viewBox="0 0 100 50">
  <path fill="none" stroke="#000" strokeWidth="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z" />
</svg>
    );
  }
}

export default AndGate;
