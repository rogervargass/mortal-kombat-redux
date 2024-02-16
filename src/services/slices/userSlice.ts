import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {} as User,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = {} as User;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
