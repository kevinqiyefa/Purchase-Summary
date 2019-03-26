import React from 'react';
import { shallow } from 'enzyme';
import PricingSummary from '../PriceSummary';
import toJson from 'enzyme-to-json';

describe('Testing PricingSummary Component', () => {
  let wrapped;
  const pricing = {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  };

  beforeEach(() => {
    wrapped = shallow(<PricingSummary pricing={pricing} />);
  });

  it('shows 5 children in the DIV', () => {
    expect(wrapped.find('.Price-Summary-Main').children().length).toEqual(5);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapped);
    expect(serialized).toMatchSnapshot();
  });
});
