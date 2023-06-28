//users.ts
import { createSlice } from '@reduxjs/toolkit';
import { AllUsers } from '../interfaces/shoe';

interface InitialUserState {
  user: string | null;
  allUsers: AllUsers[] | null;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    allUsers: null,
  } as InitialUserState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { loginUser, logoutUser, getAllUsers } = usersSlice.actions;
export default usersSlice.reducer;
