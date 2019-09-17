import { put, select } from 'redux-saga/effects';
import { saveDailyTime } from '~/services/firebase';
import { getTimeTodayString } from '~/utils/date';

import { TimerActions } from '../ducks/timer';

export function* timerChanged() {
  try {
    const timer = yield select(state => state.timer);
    const { projectsId, initialTime } = timer;

    if (projectsId.length === 0) {
      yield put(TimerActions.timerStop());
      if (initialTime) {
        const data = {
          date: getTimeTodayString(),
          total: Date.now() - initialTime,
        };

        saveDailyTime(data);

        yield put(TimerActions.timerSetInitialTime(null));
      }
    } else if (projectsId.length === 1 && !initialTime) {
      yield put(TimerActions.timerSetInitialTime(Date.now()));
      yield put(TimerActions.timerStart());
    } else {
      yield put(TimerActions.timerStart());
    }
  } catch (e) {
    console.tron.error(e);
    // yield put();
    // AuthActions.loadAuthFailure('Email ou senha incorretos, tente novamente.')
  }
}
