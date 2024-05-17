import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/rootReducer";

export interface ReviewState {
  title: string;
  score: number;
}
const initialState: ReviewState[] = [{ title: "", score: 0 }];

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<{ title: string; score: number }>) {
      const { title, score } = action.payload;

      const existingReview = state.find((review) => review.title === title);
      if (!existingReview) {
        console.log(title, score);
        state.push({ title, score });
      }
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const getReviews = (state: RootState) => state.reviewSlice;
export default reviewSlice.reducer;
