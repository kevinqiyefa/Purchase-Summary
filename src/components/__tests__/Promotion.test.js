import React from 'react';
import { mount } from 'enzyme';
import PurchaseSummary from '../PurchaseSummary';
import Promotion from '../Promotion';
import toJson from 'enzyme-to-json';

describe('Testing ItemDetails Component', () => {
  let wrapped;

  const pricingData = {
    pricing: {
      subtotal: 102.96,
      savings: 3.85,
      tax: 8.92,
      total: 108.03,
      zip: 85050
    },
    itemDetails: {
      item_name:
        'Essntials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
      quantity: 1
    },
    promo_code: 'DISCOUNT',
    discount_applied: false
  };
  beforeEach(() => {
    wrapped = mount(<PurchaseSummary pricingData={pricingData} />);
  });

  it('finds promotion section class name', () => {
    expect(
      wrapped
        .find(Promotion)
        .childAt(0)
        .hasClass('Promotion-Main')
    ).toEqual(true);
  });

  it('shows state', () => {
    expect(wrapped.find(Promotion).state('showForm')).toEqual(false);
  });

  it('shows promotion form', () => {
    wrapped.find('.Promotion-Section-Title').simulate('click');
    expect(wrapped.find(Promotion).state('showForm')).toEqual(true);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapped);
    expect(serialized).toMatchSnapshot();
  });
});
