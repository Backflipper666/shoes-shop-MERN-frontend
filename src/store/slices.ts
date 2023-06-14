// counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { apiCallBegan } from './actions';
import RootState from './types';
import { Shoe } from '../interfaces/shoe';

const shoesSlice = createSlice({
  name: 'shoes',
  initialState: {
    list: [] as Array<any>,
    loading: false,
    onSale: [] as Array<any>,
    shoesToBeRendered: [] as Array<any>,
  },
  reducers: {
    shoesRequested: (shoes, action) => {
      shoes.loading = true;
    },
    shoesFetched: (shoes, action) => {
      console.log('shoes fetchhhed');
      shoes.list = action.payload;
      shoes.loading = false;
      shoes.onSale = action.payload.filter((shoe: Shoe) => shoe.onSale);
      shoes.shoesToBeRendered = action.payload;
    },
    shoesRequestFailed: (shoes, action) => {
      shoes.loading = false;
    },
    shoesFilteredOnSale: (shoes, action) => {
      shoes.shoesToBeRendered = action.payload;
    },
  },
});
export const {
  shoesRequested,
  shoesFetched,
  shoesRequestFailed,
  shoesFilteredOnSale,
} = shoesSlice.actions;
export default shoesSlice.reducer;
