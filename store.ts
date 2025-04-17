import { configureStore } from '@reduxjs/toolkit';

import navReducer, { NavState } from './slices/navSlice';

export interface RootState {
  nav: NavState;
}

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
