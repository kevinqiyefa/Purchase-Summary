import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  let wrapper;
  it('renders', () => {
    // smoke test!!!
    wrapper = shallow(<App />);
    expect(wrapper.hasClass('App')).toEqual(true);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
