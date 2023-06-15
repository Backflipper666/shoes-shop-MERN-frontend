//slices.ts
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { apiCallBegan } from './actions';
import RootState from './types';
import { Shoe } from '../interfaces/shoe';

interface CheckedFields {
  isOnSaleChecked: boolean;
  isNewCollectionChecked: boolean;
  isNikeChecked: boolean;
  isPumaChecked: boolean;
}

interface ShoesState {
  list: Shoe[];
  loading: boolean;
  onSale: Shoe[];
  shoesToBeRendered: Shoe[];
  checkedFields: CheckedFields;
}

const initialState: ShoesState = {
  list: [],
  loading: false,
  onSale: [],
  shoesToBeRendered: [],
  checkedFields: {
    isOnSaleChecked: false,
    isNewCollectionChecked: false,
    isNikeChecked: false,
    isPumaChecked: false,
  },
};

const shoesSlice = createSlice({
  name: 'shoes',
  initialState,
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
    setShoesToBeRendered: (state, action) => {
      state.shoesToBeRendered = action.payload;
    },
    setIsOnSaleChecked: (state, action) => {
      state.checkedFields.isOnSaleChecked = action.payload;
    },
    setIsNewCollectionChecked: (state, action) => {
      state.checkedFields.isNewCollectionChecked = action.payload;
    },
    setIsNikeChecked: (state, action) => {
      state.checkedFields.isNikeChecked = action.payload;
    },
    setIsPumaChecked: (state, action) => {
      state.checkedFields.isPumaChecked = action.payload;
    },
  },
});

export const {
  shoesRequested,
  shoesFetched,
  shoesRequestFailed,
  setShoesToBeRendered,
  shoesFilteredOnSale,
  shoesFilteredByNewCollection,
  setIsOnSaleChecked,
  setIsNewCollectionChecked,
  setIsNikeChecked,
  setIsPumaChecked,
} = shoesSlice.actions;
export default shoesSlice.reducer;
