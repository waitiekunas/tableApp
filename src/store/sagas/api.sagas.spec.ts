import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { setTableDataAction } from '../actions/api.actions';
import { mockedTableResponse } from './../../mockedData/mockedResponse';
import { mockedState } from './../../mockedData/mockedState';
import { requestTableDataSaga } from './api.sagas';

describe('requestTableDataSaga', () => {
  it('should call api and set data', async () => {
    return expectSaga(requestTableDataSaga)
      .provide([[matchers.call.fn(axios.get), { data: mockedTableResponse }]])
      .withState(mockedState)
      .put(setTableDataAction(mockedTableResponse))
      .run();
  });
});
