import { combineReducers } from 'redux';

import { apiReducer, ApiState } from './api.reducers';

export interface RootState {
  apiState: ApiState
}

const allReducers = combineReducers({
  apiState: apiReducer,
});

export default allReducers;
