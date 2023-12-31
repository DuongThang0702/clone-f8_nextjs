import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app";
import userSlice from "./user";
import courselice from "./course";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const commonConfig = {
  key: "ShortCourse/user",
  storage,
};
const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "access_token", "current"],
};

export const store = configureStore({
  reducer: {
    app: appSlice,
    course: courselice,
    user: persistReducer<any>(userConfig, userSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
