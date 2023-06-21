import { configureStore, Middleware } from '@reduxjs/toolkit';
import shoesReducer from './slices';
import usersReducer from './users';
import api from '../services/apiCallShoes';
import signupApi from '../services/apiCallSignup';

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    shoesApi: api.reducer,
    users: usersReducer,
    signupApi: signupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability checks to increase performance
    }).concat([
      api.middleware as Middleware,
      signupApi.middleware as Middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
