import { addReview } from "../Slices/reviewSlice";

export const useReview = (
  title: string,
  score: number,
  pagesRead: number,
  review: string,
  dispatch: any
) => {
  console.log("adding review");
  dispatch(
    addReview({
      title: title,
      score: score,
      review: review,
      pagesRead: pagesRead,
    })
  );
};
