import { configureStore, Middleware } from '@reduxjs/toolkit';
import shoesReducer from './slices';
import usersReducer from './users';
import api from '../services/apiCallShoes';
import signupApi from '../services/apiCallSignup';
import loginApi from '../services/apiCallLogin';
import addToFavoritesApi from '../services/apiCallAddToFavorites';

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    shoesApi: api.reducer,
    users: usersReducer,
    signupApi: signupApi.reducer,
    loginApi: loginApi.reducer,
    addToFavoritesApi: addToFavoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability checks to increase performance
    }).concat([
      api.middleware as Middleware,
      signupApi.middleware as Middleware,
      loginApi.middleware as Middleware,
      addToFavoritesApi.middleware as Middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
