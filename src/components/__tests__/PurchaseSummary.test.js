import React from 'react';
import { shallow } from 'enzyme';
import PuchaseSummary from '../PurchaseSummary';
import PricingSummary from '../PriceSummary';
import ItemDetails from '../ItemDetails';
import Promotion from '../Promotion';
import toJson from 'enzyme-to-json';

describe('Testing PuchaseSummary Component', () => {
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
    wrapped = shallow(<PuchaseSummary pricingData={pricingData} />);
  });

  it('shows a pricing summary section', () => {
    expect(wrapped.find(PricingSummary).length).toEqual(1);
  });

  it('shows a itemDetails section', () => {
    expect(wrapped.find(ItemDetails).length).toEqual(1);
  });

  it('shows a promotion section', () => {
    expect(wrapped.find(Promotion).length).toEqual(1);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapped);
    expect(serialized).toMatchSnapshot();
  });
});
