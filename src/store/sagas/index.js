import { all, takeLatest } from 'redux-saga/effects';

import { TimerTypes } from '../ducks/timer';

import { timerChanged } from './timer';

export default function*() {
  return yield all([
    takeLatest(TimerTypes.TIMER_ADD_PROJECT, timerChanged),
    takeLatest(TimerTypes.TIMER_REMOVE_PROJECT, timerChanged),
  ]);
}
