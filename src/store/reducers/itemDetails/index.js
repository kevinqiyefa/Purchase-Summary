import * as actions from '../../actions/actionTypes';
const INITIAL_STATE = {};

export default function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCH_ITEM_DATA:
      return { ...state, ...action.itemDetails };

    default:
      return state;
  }
}
