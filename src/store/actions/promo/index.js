import * as actions from '../actionTypes';
export function applyDiscount(sub, sav, tax) {
  return { type: actions.APPLY_DISCOUNT, sub, sav, tax };
}
