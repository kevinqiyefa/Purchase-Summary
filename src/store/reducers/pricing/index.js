import * as actions from '../../actions/actionTypes';
const INITIAL_STATE = {};

export default function pricingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCH_PRICING_DATA:
      return { ...state, ...action.pricing };

    default:
      return state;
  }
}
