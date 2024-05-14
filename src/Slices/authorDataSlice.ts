import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/rootReducer";
import * as AuthorDataTypes from "../types/authorDataType";
interface AuthorSearch {
  type: "author";
  author: AuthorDataTypes.Doc;
}
export interface AuthorDataSearchState {
  result: AuthorSearch[];
}
const initialState: AuthorDataSearchState = {
  result: [],
};
const authorDataSlice = createSlice({
  name: "authorData",
  initialState,
  reducers: {
    setAuthorSearchResult(state, action: PayloadAction<AuthorSearch>) {
      state.result = [action.payload];
    },
  },
});
export const { setAuthorSearchResult } = authorDataSlice.actions;
export const getAuthorDataSliceData = (state: RootState) =>
  state.authorDataSlice;
export default authorDataSlice.reducer;
