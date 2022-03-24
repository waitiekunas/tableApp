import { createAction } from '@reduxjs/toolkit';

export const loadedAppAction = createAction<boolean>('LOADED_FIRST_PAGE');
