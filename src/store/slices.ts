//slices.ts
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { apiCallBegan } from './actions';
import RootState from './types';
import { Shoe } from '../interfaces/shoe';

const shoesSlice = createSlice({
  name: 'shoes',
  initialState: {
    list: [] as Shoe[],
    loading: false,
    onSale: [] as Shoe[],
    shoesToBeRendered: [] as Shoe[],
    checkedFields: {
      isOnSaleChecked: false,
      isNewCollectionChecked: false,
    },
  },
  reducers: {
    shoesRequested: (shoes) => {
      shoes.loading = true;
    },
    shoesFetched: (shoes, action) => {
      console.log('shoes fetched');
      shoes.list = action.payload;
      shoes.loading = false;
      shoes.shoesToBeRendered = action.payload;
    },
    shoesRequestFailed: (shoes) => {
      shoes.loading = false;
    },
    shoesFilteredOnSale: (shoes, action) => {
      shoes.shoesToBeRendered = action.payload;
    },
    shoesFilteredByNewCollection: (shoes, action) => {
      shoes.shoesToBeRendered = action.payload;
    },
    setIsOnSaleChecked: (state, action) => {
      state.checkedFields.isOnSaleChecked = action.payload;
    },
    setIsNewCollectionChecked: (state, action) => {
      state.checkedFields.isNewCollectionChecked = action.payload;
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
