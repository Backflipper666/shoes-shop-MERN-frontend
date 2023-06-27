//apiCallUserItems.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'getUserItemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getUserItemsApi: builder.query<void, { email: string }>({
      query: (data) => ({
        url: '/api/user/items',
        body: data,
      }),
    }),
  }),
});

export const { useGetUserItemsApiQuery } = api;
export default api;
