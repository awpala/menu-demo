import { combineReducers } from 'redux';
import errorReducer from './error';
import menuSelectionReducer from './menuSelection';

const rootReducer = combineReducers({
  error: errorReducer,
  menuSelection: menuSelectionReducer,
});

export default rootReducer;
