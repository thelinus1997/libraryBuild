import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Doc } from "../types/titleType";
import { RootState } from "../Store/rootReducer";

interface FavBooksState {
  books: Doc[];
}
const initialState: FavBooksState = {
  books: [],
};

const favBooksSlice = createSlice({
  name: "favBooks",
  initialState,
  reducers: {
    addFavoriteBook(state, action: PayloadAction<{ book: any }>) {
      const { book } = action.payload;
      state.books.push(book);
    },
    removeFavoriteBook(state, action: PayloadAction<{ book: any }>) {
      const { book } = action.payload;
      state.books = state.books.filter((title) => title !== book);
    },
  },
});

export const { addFavoriteBook, removeFavoriteBook } = favBooksSlice.actions;
export const getFavoriteBooks = (state: RootState) => state.favBooks;
export default favBooksSlice.reducer;
