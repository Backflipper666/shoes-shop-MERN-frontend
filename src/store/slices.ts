//slices.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShoesState } from '../interfaces/shoe';

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
    isAdidasChecked: false,
    isFilaChecked: false,
    isForMenChecked: false,
    isForWomenChecked: false,
  },
  priceRange: { min: 10000, max: 100000 },
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
    setIsAdidasChecked: (state, action) => {
      state.checkedFields.isAdidasChecked = action.payload;
    },
    setIsFilaChecked: (state, action) => {
      state.checkedFields.isFilaChecked = action.payload;
    },
    setIsForMenChecked: (state, action) => {
      console.log(
        'state.checkedFields.isForMenChecked: ',
        state.checkedFields.isForMenChecked
      );
      state.checkedFields.isForMenChecked = action.payload;
    },
    setIsForWomenChecked: (state, action) => {
      console.log(
        'state.checkedFields.isForWomenChecked: ',
        state.checkedFields.isForMenChecked
      );
      state.checkedFields.isForWomenChecked = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.priceRange = action.payload;
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
  setIsAdidasChecked,
  setIsFilaChecked,
  setPriceRange,
  setIsForMenChecked,
  setIsForWomenChecked,
} = shoesSlice.actions;
export default shoesSlice.reducer;
