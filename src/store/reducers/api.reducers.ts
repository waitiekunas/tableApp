import { createReducer } from '@reduxjs/toolkit';

import { TableData } from '../../types/api.types';
import { setTableDataAction } from './../actions/api.actions';

export interface ApiState {
  tableData: TableData[];
}

export const initialAppState: ApiState = {
    tableData: [

  ]
};

export const apiReducer = createReducer<ApiState>(initialAppState, (builder) => {
  builder.addCase(setTableDataAction, (state, { payload }) => ({
    ...state,
    tableData: payload
  }));
});
