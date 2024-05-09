import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TitleSearchTypes } from "../types/titleType";
import { AuthorSearchType } from "../types/authorType";

interface TitleSearch {
  type: "title";
  title: TitleSearchTypes;
}
interface AuthorSearch {
  type: "author";
  author: AuthorSearchType;
}
type SearchResult = TitleSearch | AuthorSearch;

interface SearchState {
  result: SearchResult | null;
}
const initialState: SearchState = {
  result: null,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult(state, action: PayloadAction<SearchResult>) {
      state.result = action.payload;
    },
  },
});

export const { setSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
