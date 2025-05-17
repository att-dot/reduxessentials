import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postSlice.ts";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;

export default store;
