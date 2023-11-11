import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";

interface Payload {
  modalChildren: React.ReactElement | null;
  isShowModal: boolean;
}

interface Loading {
  isShowLoading: boolean;
  componentLoading: React.ReactElement | null;
}

const initialState = {
  isShowLoading: false,
  componentLoading: null as React.ReactElement | null,
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
    showLoading: (state, { payload }: PayloadAction<Loading>) => {
      state.isShowLoading = payload.isShowLoading;
      state.componentLoading = payload.componentLoading;
    },
  },
});

export const { showModel, showLoading } = appSlice.actions;
export default appSlice.reducer;
