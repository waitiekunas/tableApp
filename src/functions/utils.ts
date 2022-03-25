import { TableData } from '../types/api.types';

export const filterEvenNumbers = (table: TableData[]) => table.filter(({ id }) => id % 2 === 0);
export const filterOddNumbers = (table: TableData[]) => table.filter(({ id }) => id % 2 === 1);