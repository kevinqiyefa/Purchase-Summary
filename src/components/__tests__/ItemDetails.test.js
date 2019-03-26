import React from 'react';
import { shallow } from 'enzyme';
import ItemDetails from '../ItemDetails';
import toJson from 'enzyme-to-json';

describe('Testing ItemDetails Component', () => {
  let wrapped;
  const pricing = {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  };

  const itemDetails = {
    item_name:
      'Essntials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
    quantity: 1
  };

  beforeEach(() => {
    wrapped = shallow(
      <ItemDetails pricing={pricing} itemDetails={itemDetails} />
    );
  });

  it('shows 1 child DIV', () => {
    expect(wrapped.find('.Item-Details-Main').children().length).toEqual(1);
  });

  it('shows state', () => {
    expect(wrapped.state('isActive')).toEqual(false);
  });

  it('shows item details', () => {
    wrapped.find('.Item-Details-Title').simulate('click');
    expect(wrapped.state('isActive')).toEqual(true);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapped);
    expect(serialized).toMatchSnapshot();
  });
});
