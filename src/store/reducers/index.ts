import { combineReducers } from 'redux';

import { apiReducer, ApiState } from './api.reducers';
import { appReducer, AppState } from './app.reducers';

export interface RootState {
  appState: AppState;
  apiState: ApiState
}

const allReducers = combineReducers({
  appState: appReducer,
  apiState: apiReducer
});

export default allReducers;
