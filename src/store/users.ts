//users.ts
import { createSlice } from '@reduxjs/toolkit';

interface InitialUserState {
  user: string | null;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
  } as InitialUserState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
