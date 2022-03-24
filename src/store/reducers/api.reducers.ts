import { createReducer } from '@reduxjs/toolkit';

import { TableData } from '../../types/api.types';
import { loadedAppAction } from '../actions/app.actions';

export interface ApiState {
  tableData: TableData[];
}

export const initialAppState: ApiState = {
    tableData: [

  ]
};

export const apiReducer = createReducer<ApiState>(initialAppState, (builder) => {
  builder.addCase(loadedAppAction, (state, { payload }) => ({
    ...state,
    loaded: payload
  }));
});
