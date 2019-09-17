import { put } from 'redux-saga/effects';

import { ProjectTimeActions } from '../ducks/ProjectTime';
import { saveTaskTime as save } from '~/services/firebase';

export function* saveTaskTime({ data }) {
  try {
    save(data);

    yield put(ProjectTimeActions.projectTimeSaveSuccess('Sucesso'));
  } catch (e) {
    yield put(ProjectTimeActions.projectTimeSaveFailure('Erro ao salvar task'));
  }
}
