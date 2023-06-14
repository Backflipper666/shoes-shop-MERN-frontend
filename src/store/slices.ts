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
    filteredBy: {
      onSale: false,
      newCollection: false,
    },
    isOnSaleChecked: false,
    isNewCollectionChecked: false,
  },
  reducers: {
    shoesRequested: (shoes, action) => {
      shoes.loading = true;
    },
    shoesFetched: (shoes, action) => {
      console.log('shoes fetchhhed');
      shoes.list = action.payload;
      shoes.loading = false;
      shoes.shoesToBeRendered = action.payload;
    },
    shoesRequestFailed: (shoes, action) => {
      shoes.loading = false;
    },
    shoesFilteredOnSale: (shoes, action) => {
      shoes.shoesToBeRendered = action.payload;
    },
    shoesFilteredByNewCollection: (shoes, action) => {
      shoes.shoesToBeRendered = action.payload;
    },
    setIsOnSaleChecked: (state, action) => {
      state.isOnSaleChecked = action.payload;
    },
    setIsNewCollectionChecked: (state, action) => {
      state.isNewCollectionChecked = action.payload;
    },
  },
});
export const {
  shoesRequested,
  shoesFetched,
  shoesRequestFailed,
  shoesFilteredOnSale,
  shoesFilteredByNewCollection,
  setIsOnSaleChecked,
  setIsNewCollectionChecked,
} = shoesSlice.actions;
export default shoesSlice.reducer;
