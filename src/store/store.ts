import { configureStore, Middleware } from '@reduxjs/toolkit';
import shoesReducer from './slices';
import usersReducer from './users';
import api from '../services/apiCallShoes';

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    shoesApi: api.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability checks to increase performance
    }).concat(api.middleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
