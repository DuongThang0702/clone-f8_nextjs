import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
import { UserCurrent } from "@/utils/type";
interface Payload {
  isLoggedIn: boolean;
  access_token: string;
}

const initialState = {
  isLoggedIn: false,
  access_token: null as null | string,
  current: null as UserCurrent | null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<Payload>) => {
      state.access_token = payload.access_token;
      state.isLoggedIn = payload.isLoggedIn;
    },

    logout: (state) => {
      state.access_token = null;
      state.isLoggedIn = false;
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getUserCurrent.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.current = action.payload;
    });
    builder.addCase(actions.getUserCurrent.rejected, (state) => {
      state.isLoggedIn = false;
      state.current = null;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
