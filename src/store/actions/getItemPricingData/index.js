import * as actions from '../actionTypes';
import { getPricingData as mockAPI } from '../../../services/api';

export function fetchItemPricingData() {
  return async dispatch => {
    try {
      let itemPricingData = await mockAPI();

      dispatch(fetchPricingData(itemPricingData.pricing));
      dispatch(fetchItemData(itemPricingData.itemDetails));
    } catch (error) {
      //dispatch error msg action
    }
  };
}

export function fetchPricingData(pricing) {
  return { type: actions.FETCH_PRICING_DATA, pricing };
}

export function fetchItemData(itemDetails) {
  return { type: actions.FETCH_ITEM_DATA, itemDetails };
}
