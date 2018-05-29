import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdsStore')
@observer
export default class BirdsView extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.BirdsStore.addBird(this.birdInput.value);
    e.target.reset();
  };

  render() {
    const { BirdsStore } = this.props;

    return (
      <div>
        <h2>You have {BirdsStore.birdCount} birds</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            ref={input => (this.birdInput = input)}
            placeholder="Add a bird"
          />
        </form>

        <ul>{BirdsStore.birds.map(bird => <li key={bird}>{bird}</li>)}</ul>
      </div>
    );
  }
}