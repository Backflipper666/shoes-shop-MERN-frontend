//apiCallCreateShoes.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'createShoesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:4000',
  }),
  endpoints: (builder) => ({
    createShoes: builder.mutation<
      void,
      {
        title: string;
        description: string;
        brand: string;
        price: number;
        image: File;
        image2: File;
        image3: File;
        image4: File;
        rating: number;
        gender: string;
        onSale: boolean;
        discountPercent: number;
        newCollection: boolean;
        season: string;
      }
    >({
      query: (data) => ({
        url: '/api/shoes',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateShoesMutation } = api;
export default api;
