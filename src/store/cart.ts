//users.ts
import { createSlice } from '@reduxjs/toolkit';

interface InitialCartState {
  uniqueItems: number;
  totalCost: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    uniqueItems: 0,
    totalCost: 0,
  } as InitialCartState,
  reducers: {
    setUniqueItems: (state, action) => {
      state.uniqueItems = action.payload;
    },
    setTotalCost: (state, action) => {
      state.totalCost = action.payload;
    },
  },
});

export const { setUniqueItems, setTotalCost } = cartSlice.actions;
export default cartSlice.reducer;
