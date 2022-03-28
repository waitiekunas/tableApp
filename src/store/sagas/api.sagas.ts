import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { TableData } from '../../types/api.types';
import { getTableDataAction, setTableDataAction } from './../actions/api.actions';

export function* requestTableDataSaga() {
  try {
    const { data }: AxiosResponse<TableData[]> = yield call(
      axios.get,
      'http://localhost:5000/users'
    );
    yield put(setTableDataAction(data));
  } catch (e) {
    console.log('handle Error', e);
  }
}

export function* apiSagas() {
  yield all([takeLatest(getTableDataAction, requestTableDataSaga)]);
}
