import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavAuthorsState {
  authors: string[];
}

const initialState: FavAuthorsState = {
  authors: [],
};

const favAuthorsSlice = createSlice({
  name: "favAuthors",
  initialState,
  reducers: {
    addFavoriteAuthor(state, action: PayloadAction<{ authorName: string }>) {
      const { authorName } = action.payload;
      if (!state.authors.includes(authorName)) {
        state.authors.push(authorName);
      }
    },
    removeFavoriteAuthor(state, action: PayloadAction<{ authorName: string }>) {
      const { authorName } = action.payload;
      state.authors = state.authors.filter((name) => name !== authorName);
    },
  },
});

export const { addFavoriteAuthor, removeFavoriteAuthor } =
  favAuthorsSlice.actions;
export default favAuthorsSlice.reducer;
