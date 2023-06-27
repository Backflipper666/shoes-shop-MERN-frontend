//apiCallAddToFavorites.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'addToFavoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    addToFavorites: builder.mutation<
      void,
      { email: string | null; shoeId: string | number; token: string | null }
    >({
      query: (data) => ({
        url: '/api/user/add-to-favorites',
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

export const { useAddToFavoritesMutation } = api;
export default api;
