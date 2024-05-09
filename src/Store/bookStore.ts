import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Slices/searchSlice";
import favAuthorsReducer from "../Slices/favAuthorSlice";
import favBooksReducer from "../Slices/favBookSlice";
import { rootReducer } from "./rootReducer";
export const bookStore = configureStore({
  reducer: rootReducer,
});
