import { all, takeLatest } from 'redux-saga/effects';

import { TimerTypes } from '../ducks/timer';
import { ProjectTimeTypes } from '../ducks/ProjectTime';

import { timerChanged } from './timer';
import { saveTaskTime } from './timerProject';

export default function*() {
  return yield all([
    takeLatest(TimerTypes.TIMER_ADD_PROJECT, timerChanged),
    takeLatest(TimerTypes.TIMER_REMOVE_PROJECT, timerChanged),
    takeLatest(ProjectTimeTypes.PROJECT_TIME_SAVE_REQUEST, saveTaskTime),
  ]);
}
