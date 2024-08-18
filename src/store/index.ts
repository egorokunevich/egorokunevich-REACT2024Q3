import { configureStore } from '@reduxjs/toolkit';
import formReducer from './FormSlice';

export const store = configureStore({
  reducer: {
    formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
