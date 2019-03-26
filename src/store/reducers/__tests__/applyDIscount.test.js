import pricingDataReducer from '../pricingData';
import { APPLY_DISCOUNT } from '../../actions/actionTypes';

it('handles actions of type APPLY_DISCOUNT', () => {
  const action = {
    type: APPLY_DISCOUNT,
    sub: 102.96,
    sav: 3.85,
    tax: 8.92
  };

  const newState = pricingDataReducer([], action);

  expect(newState.pricing.total).toEqual(87.43);
  expect(newState.pricing.savings).toEqual(14.15);
  expect(newState.pricing.subtotal).toEqual(92.66);
});

it('handles action with unknown type', () => {
  const newState = pricingDataReducer([], { type: 'LKAFDSJLKAFD' });
  expect(newState).toEqual([]);
});
