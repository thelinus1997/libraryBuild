import React, { useEffect, useState } from "react";
import { getReviews } from "../../Slices/reviewSlice";
import { useSelector } from "react-redux";
import { useAverage } from "../../hooks/useAverage";
import { useTotal } from "../../hooks/useTotal";
const MyPages = () => {
  const [latestReview, setLatestReview] = useState({
    title: "",
    score: 0,
    review: "",
    pagesRead: 0,
  });
  const [reviewArray, setReviewArray] = useState([]);
  const [averageScore, setAverageScore] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const myReviews = useSelector(getReviews);
  useEffect(() => {
    const tempArray: any = myReviews;
    setLatestReview(tempArray[tempArray.length - 1]);
    setReviewArray(tempArray);
    const myScores = tempArray.map((item: any, index: number) => {
      return item.score;
    });

    const averagedScores = useAverage(myScores);
    setAverageScore(averagedScores);
    const pages = tempArray.map((item: any, index: number) => {
      return item.pagesRead;
    });
    const totalPagesRead = useTotal(pages);
    setTotalPages(totalPagesRead);
    console.log(pages);
  }, [myReviews]);

  return (
    <div className="w-full flex flex-wrap justify-center py-5">
      <div className="w-11/12 flex bg-white rounded border text-center flex-col">
        <h2 className="text-3xl font-bold tracking-wider py-5">My page</h2>
        <div className="flex flex-row py-10 px-5 justify-evenly">
          {latestReview.pagesRead !== 0 && (
            <div className="w-4/12 border border-indigo-600 rounded">
              <h2 className="text-2xl">Your latest review:</h2>
              <h2>{latestReview.title}</h2>
              <p>{latestReview.review}</p>
              <p>You read {latestReview.pagesRead} pages</p>
              <p>and gave the book a score of: {latestReview.score}</p>
            </div>
          )}

          <div className="w-4/12 border border-indigo-600 rounded">
            <h2 className="text-2xl">Some stats about your reading:</h2>
            <p>The amount of books you've read is: {reviewArray.length - 1}</p>
            <p>
              The average score you gave the books you read is: {averageScore}{" "}
            </p>
            <p>The total amount of pages you have read is: {totalPages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPages;
