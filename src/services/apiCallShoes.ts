//apiCallShoes.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Shoe } from '../interfaces/shoe';

export const api = createApi({
  reducerPath: 'shoesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sneakers-shop-step-street.onrender.com',
  }), // Replace '/api' with your API base URL
  endpoints: (builder) => ({
    getShoes: builder.query<Shoe[], void>({
      query: () => '/api/shoes', // Replace 'shoes' with your endpoint path
    }),
  }),
});

export const { useGetShoesQuery } = api;
export default api;
//https://sneakers-shop-step-street.onrender.com
