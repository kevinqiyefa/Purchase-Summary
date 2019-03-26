import * as actions from '../../actions/actionTypes';
const INITIAL_STATE = {};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCH_PRICING_DATA:
      return { ...state, ...action.pricingData };
    case actions.APPLY_DISCOUNT:
      let newSubtotal = +(action.sub * 0.9).toFixed(2);
      let newSavings = +(action.sub - action.sub * 0.9 + action.sav).toFixed(2);

      let newTotal = +(newSubtotal - newSavings + action.tax).toFixed(2);
      return {
        ...state,
        pricing: {
          ...state.pricing,
          subtotal: newSubtotal,
          savings: newSavings,
          total: newTotal
        },
        discount_applied: true
      };
    default:
      return state;
  }
}
