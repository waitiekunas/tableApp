import { combineReducers } from 'redux';

import { appReducer, AppState } from './app.reducers';

export interface RootState {
  appState: AppState;
}

const allReducers = combineReducers({
  appState: appReducer
});

export default allReducers;
