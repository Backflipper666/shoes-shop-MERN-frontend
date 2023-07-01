//apiCallLogin.tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sneakers-shop-step-street.onrender.com',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<void, { email: string; password: string }>({
      query: (data) => ({
        url: '/api/user/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = api;
export default api;
