import { createReducer } from '@reduxjs/toolkit';

import { TableData } from '../../types/api.types';
import { loadedAppAction } from '../actions/app.actions';

export interface ApiState {
  tableData: TableData[];
}

export const initialAppState: ApiState = {
    tableData: [
    {
      id: 1,
      name: 'Andrius'
    },
    {
      id: 2,
      name: 'Andrius'
    },
    {
      id: 3,
      name: 'Andrius'
    },
    {
      id: 4,
      name: 'Andrius'
    },
    {
      id: 5,
      name: 'Andrius'
    }
  ]
};

export const apiReducer = createReducer<ApiState>(initialAppState, (builder) => {
  builder.addCase(loadedAppAction, (state, { payload }) => ({
    ...state,
    loaded: payload
  }));
});