import * as actions from '../actionTypes';
import { getPricingData as mockAPI } from '../../../services/api';

export function fetchItemPricingData() {
  return async dispatch => {
    try {
      let itemPricingData = await mockAPI();

      dispatch(fetchPricingData(itemPricingData));
    } catch (error) {
      //dispatch error msg action
    }
  };
}

export function fetchPricingData(pricingData) {
  return { type: actions.FETCH_PRICING_DATA, pricingData };
}
