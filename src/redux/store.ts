import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';

// Storeの作成
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
