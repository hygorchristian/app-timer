import { call, put, select } from 'redux-saga/effects';

import { TimerActions } from '../ducks/timer';

export function* timerChanged() {
  try {
    const projectsID = yield select(state => state.timer.projectsId);

    if(projectsID.length === 0){
      yield put(TimerActions.timerStop())
    }else{
      yield put(TimerActions.timerStart())
    }
  } catch (e) {
    yield put();
    // AuthActions.loadAuthFailure('Email ou senha incorretos, tente novamente.')
  }
}
