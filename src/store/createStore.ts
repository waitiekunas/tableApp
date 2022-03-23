import { configureStore } from '@reduxjs/toolkit';

import allReducers from './reducers';

const isDevelopment = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: allReducers,
  devTools: isDevelopment
});

export default store;
