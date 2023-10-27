import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
import { Course, Courses } from "@/utils/type";

// interface Payload {
//   courses: Course[];
// }

const initialState = {
  courses: null as Courses | null,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(actions.getAllCourse.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
    builder.addCase(actions.getAllCourse.rejected, (state) => {
      state.courses = null;
    });
  },
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;
