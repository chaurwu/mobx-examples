import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import BirdsStore from './stores/BirdsStore';
import BirdsView from './components/BirdsView';

class App extends Component {
  render() {
    return (
      <Provider BirdsStore={BirdsStore}>
        <BirdsView />
      </Provider>
    );
  }
}

export default App;