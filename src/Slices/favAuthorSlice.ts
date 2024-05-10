import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/rootReducer";

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
        console.log("Hello!" + authorName);
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
export const getFavoriteAuthors = (state: RootState) => state.favAuthors;
export default favAuthorsSlice.reducer;
