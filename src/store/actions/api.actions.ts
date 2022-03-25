import { createAction } from '@reduxjs/toolkit';

import { TableData } from '../../types/api.types';

export const getTableDataAction = createAction('GET_TABLE_DATA');
export const setTableDataAction = createAction<TableData[]>('SET_TABLE_DATA');

