import { combineReducers } from 'redux';

import { TimerReducer as timer } from './timer';
import { ProjectTimeReducer as projectTimer } from './ProjectTime';

export default combineReducers({
  timer,
  projectTimer,
});
