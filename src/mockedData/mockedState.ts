import { RootState } from '../store/reducers';
import { mockedTableResponse } from './mockedResponse';

export const mockedState: RootState = {
  apiState: {
    tableData: mockedTableResponse
  }
};
