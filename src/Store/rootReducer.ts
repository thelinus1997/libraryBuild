import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../Slices/searchSlice";
import favAuthorsReducer from "../Slices/favAuthorSlice";
import favBooksReducer from "../Slices/favBookSlice";
import reviewSliceReducer from "../Slices/reviewSlice";
import { AuthorSearchType } from "../types/authorType";
import { TitleSearchTypes } from "../types/titleType";
import reviewSlice, { ReviewState } from "../Slices/reviewSlice";
import authorDataSliceReducer from "../Slices/authorDataSlice";
interface SearchState {
  result: AuthorSearchType | TitleSearchTypes; // Define SearchResult as needed
}

interface FavAuthorsState {}

interface FavBooksState {}
interface AuthorDataSearchState {}

export interface RootState {
  search: SearchState;
  favAuthors: FavAuthorsState;
  favBooks: FavBooksState;
  reviewSlice: ReviewState;
  authorDataSlice: AuthorDataSearchState;
}
export const rootReducer = combineReducers({
  search: searchReducer,
  favAuthors: favAuthorsReducer,
  favBooks: favBooksReducer,
  reviewSlice: reviewSliceReducer,
  authorDataSlice: authorDataSliceReducer,
});
