import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookReducer";
export const bookStore = configureStore({
  reducer: bookReducer,
});
