import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavBooksState {
  titles: string[];
}
const initialState: FavBooksState = {
  titles: [],
};

const favBooksSlice = createSlice({
  name: "favBooks",
  initialState,
  reducers: {
    addFavoriteBook(state, action: PayloadAction<{ bookTitle: string }>) {
      const { bookTitle } = action.payload;
      if (!state.titles.includes(bookTitle)) {
        state.titles.push(bookTitle);
      }
    },
    removeFavoriteBook(state, action: PayloadAction<{ bookTitle: string }>) {
      const { bookTitle } = action.payload;
      state.titles = state.titles.filter((title) => title !== bookTitle);
    },
  },
});

export const { addFavoriteBook, removeFavoriteBook } = favBooksSlice.actions;
export default favBooksSlice.reducer;
