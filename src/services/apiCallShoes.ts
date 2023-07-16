//apiCallShoes.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Shoe } from '../interfaces/shoe';

interface Data {
  shoes: Shoe[];
}

export const api = createApi({
  reducerPath: 'shoesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
  }), // Replace '/api' with your API base URL
  endpoints: (builder) => ({
    getShoes: builder.query<Data, void>({
      query: () => '/api/shoes', // Replace 'shoes' with your endpoint path
    }),
  }),
});

export const { useGetShoesQuery } = api;
export default api;
//https://sneakers-shop-step-street.onrender.com
//http://127.0.0.1:8000/
