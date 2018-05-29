import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class NotGate extends Component {
  render() {
    return (
<svg className="logic-gate" viewBox="0 0 100 50">
  <path fill="none" stroke="#000" strokeWidth="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path fillRule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  <path fill="none" stroke="#000" strokeWidth="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" style={{marker:'none'}}/>
</svg>
    );
  }
}

export default NotGate;
