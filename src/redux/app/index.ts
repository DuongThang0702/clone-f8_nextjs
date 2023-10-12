import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";

interface Payload {
  modalChildren: React.ReactElement | null;
  isShowModal: boolean;
}

const initialState = {
  isShowModal: false,
  modalChildren: null as React.ReactElement | null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showModel: (state, { payload }: PayloadAction<Payload>) => {
      state.isShowModal = payload.isShowModal;
      state.modalChildren = payload.modalChildren;
    },
  },
});

export const { showModel } = appSlice.actions;
export default appSlice.reducer;
