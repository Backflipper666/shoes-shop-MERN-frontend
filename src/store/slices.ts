// counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { apiCallBegan } from './actions';
import RootState from './types';

const shoesSlice = createSlice({
  name: 'shoes',
  initialState: {
    list: [] as Array<any>,
    loading: false,
  },
  reducers: {
    shoesRequested: (shoes, action) => {
      shoes.loading = true;
    },
    shoesFetched: (shoes, action) => {
      shoes.list = action.payload;
      shoes.loading = false;
    },
    shoesRequestFailed: (shoes, action) => {
      shoes.loading = false;
    },
  },
});
export const { shoesRequested, shoesFetched, shoesRequestFailed } =
  shoesSlice.actions;
export default shoesSlice.reducer;
