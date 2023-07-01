//apiCallUsers.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sneakers-shop-step-street.onrender.com',
  }), // Replace '/api' with your API base URL
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/api/user/items', // Replace 'shoes' with your endpoint path
    }),
  }),
});

export const { useGetUsersQuery } = api;
export default api;
//https://sneakers-shop-step-street.onrender.com
