import React from 'react';
import { shallow } from 'enzyme';
import Counter from './counter';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />);

    // Try not to peak into the internal state of a component.
    //const countState = wrapper.state().count
    //expect(countState).toEqual(0)

    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 0')
  })

  it('increments the count when the increment button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementButton = wrapper.find('button.increment');
    incrementButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 1')
  })

  it('decrements the count when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const decrementButton = wrapper.find('button.decrement');
    decrementButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: -1')
  })

})