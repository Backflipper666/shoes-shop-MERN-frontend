import { configureStore, Middleware } from '@reduxjs/toolkit';
import shoesReducer from './slices';
import api from '../services/apiCallShoes';

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    shoesApi: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability checks
    }).concat(api.middleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
