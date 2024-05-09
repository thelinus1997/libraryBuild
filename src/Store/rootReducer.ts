import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../Slices/searchSlice";
import favAuthorsReducer from "../Slices/favAuthorSlice";
import favBooksReducer from "../Slices/favBookSlice";
import { AuthorSearchType } from "../types/authorType";
import { TitleSearchTypes } from "../types/titleType";
interface SearchState {
  result: AuthorSearchType | TitleSearchTypes; // Define SearchResult as needed
}

interface FavAuthorsState {
  // Define the state shape of favAuthorsReducer
}

interface FavBooksState {
  // Define the state shape of favBooksReducer
}

// Combine all state interfaces into RootState
export interface RootState {
  search: SearchState;
  favAuthors: FavAuthorsState;
  favBooks: FavBooksState;
}
export const rootReducer = combineReducers({
  search: searchReducer,
  favAuthors: favAuthorsReducer,
  favBooks: favBooksReducer,
});
