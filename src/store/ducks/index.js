import { combineReducers } from 'redux';

import { TimerReducer as timer } from './timer';

export default combineReducers({
  timer,
});
