import { fetchPricingData } from '../getItemPricingData';
import { FETCH_PRICING_DATA } from '../actionTypes';

describe('fetch pricingData', () => {
  it('has the correct type', () => {
    const action = fetchPricingData();
    expect(action.type).toEqual(FETCH_PRICING_DATA);
  });

  it('has the correct payload', () => {
    const action = fetchPricingData({});
    expect(action.pricingData).toEqual({});
  });
});
