import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slices/searchSlice";
import favAuthorsReducer from "./Slices/favAuthorSlice";
import favBooksReducer from "./Slices/favBookSlice";
export const bookStore = configureStore({
  reducer: {
    search: searchReducer,
    favAuthors: favAuthorsReducer,
    favBooks: favBooksReducer,
  },
});
