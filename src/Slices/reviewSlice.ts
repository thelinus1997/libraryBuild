import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/rootReducer";

export interface ReviewState {
  title: string;
  score: number;
  review: string;
  pagesRead: number;
}
const initialState: ReviewState[] = [
  { title: "", score: 0, review: "", pagesRead: 0 },
];

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    addReview(
      state,
      action: PayloadAction<{
        title: string;
        score: number;
        review: string;
        pagesRead: number;
      }>
    ) {
      const { title, score, review, pagesRead } = action.payload;

      const existingReview = state.find((review) => review.title === title);
      if (!existingReview) {
        console.log(title, score);
        state.push({ title, score, review, pagesRead });
        console.log(state);
      }
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const getReviews = (state: RootState) => state.reviewSlice;
export default reviewSlice.reducer;
