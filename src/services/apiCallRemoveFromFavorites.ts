//apiCallRemoveFromFavorites.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'removeFromFavoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    removeFromFavorites: builder.mutation<
      void,
      { email: string | null; shoeId: string | number; token: string | null }
    >({
      query: (data) => ({
        url: '/api/user/remove-from-favorites',
        method: 'PATCH',
        body: data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const { useRemoveFromFavoritesMutation } = api;
export default api;
