import { combineReducers } from 'redux';
import pricing from './pricing';
import itemDetails from './itemDetails';

const rootReducer = combineReducers({
  pricing,
  itemDetails
});

export default rootReducer;
