import { all } from 'redux-saga/effects';

import { apiSagas } from './api.sagas';

export default function* rootSaga(): Generator {
  yield all([apiSagas()]);
}
