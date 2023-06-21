import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'signupApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    signupUser: builder.mutation<void, { email: string; password: string }>({
      query: (data) => ({
        url: '/api/user/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignupUserMutation } = api;
export default api;
