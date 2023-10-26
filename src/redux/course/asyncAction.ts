import { apiGetAllCourse } from "@/api/admin";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export const getAllCourse = createAsyncThunk(
  "course",
  async (_, { rejectWithValue }) => {
    return await apiGetAllCourse()
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 499) rejectWithValue(rs);
        if (rs.status >= 500 && rs.status <= 599) rejectWithValue(rs);
        if (rs.status >= 100 && rs.status <= 299) return rs.data;
      })
      .catch((err: AxiosError) => rejectWithValue(err));
  }
);
