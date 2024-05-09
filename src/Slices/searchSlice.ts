import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as TitleTypes from "../types/titleType";
import * as AuthorTypes from "../types/authorType";
import { RootState } from "../Store/rootReducer";
interface TitleSearch {
  type: "title";
  title: TitleTypes.Doc[];
}
interface AuthorSearch {
  type: "author";
  author: AuthorTypes.Doc[];
}
type SearchResult = TitleSearch | AuthorSearch;

interface SearchState {
  result: SearchResult[];
}
const initialState: SearchState = {
  result: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult(state, action: PayloadAction<SearchResult>) {
      if (action.payload.type === "title") {
        state.result.push(action.payload as TitleSearch);
      } else if (action.payload.type === "author") {
        state.result.push(action.payload as AuthorSearch);
      }
      console.log("My added data:", action.payload);
    },
  },
});

export const { setSearchResult } = searchSlice.actions;
export const selectSearchResult = (state: RootState) => state.search.result;
export default searchSlice.reducer;
