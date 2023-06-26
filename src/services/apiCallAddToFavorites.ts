//apiCallAddToFavorites.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'addToFavoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    addToFavorites: builder.mutation<void, { email: string; shoeId: string }>({
      query: (data) => ({
        url: '/api/user/add-to-favorites',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useAddToFavoritesMutation } = api;
export default api;
