import { createReducer } from '@reduxjs/toolkit';

import { loadedAppAction } from '../actions/app.actions';

export interface AppState {
  loaded: boolean;
}

export const initialAppState: AppState = {
  loaded: false
};

export const appReducer = createReducer<AppState>(initialAppState, (builder) => {
  builder.addCase(loadedAppAction, (state, { payload }) => ({
    ...state,
    loaded: payload
  }));
});
