import React, { useState } from "react";
import * as TitleTypes from "../../types/titleType";
import * as AuthorTypes from "../../types/authorType";
import { useDispatch } from "react-redux";
import { useReview } from "../../hooks/useReview";
import Notification from "../Notification/Notification";
interface ReviewAreaProps {
  book: TitleTypes.Doc | AuthorTypes.Doc;
}
const ReviewArea: React.FC<ReviewAreaProps> = ({ book }) => {
  const [score, setScore] = useState(1);
  const [pagesRead, setPagesRead] = useState(0);
  const [review, setReview] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const dispatch = useDispatch();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScore(parseInt(e.target.value));
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value)) {
      setPagesRead(parseInt(e.target.value));
    } else {
      setPagesRead(0);
    }
  };
  const handleReviewInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    if (pagesRead !== 0) {
      if (book) {
        useReview(book.title, score, pagesRead, review, dispatch);
        setNotificationText(`Review added!`);
        setNotificationVisible(true);
        setTimeout(() => {
          setNotificationVisible(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <p className="mx-3 text-center">
        <Notification visible={notificationVisible} text={notificationText} />
        Number of people who have read this book: {book.already_read_count}
      </p>
      <div className="mx-3 text-center">
        <h2>Leave a review!</h2>
        <textarea
          name="review"
          onChange={handleReviewInput}
          value={review}
          className="bg-white border border-indigo-600  h-full rounded p-0 mx-1 w-4/12 "
        ></textarea>
      </div>
      <div className="mx-3 my-10 text-center">
        How many pages have you read?
        <div className="flex flex-row justify-center">
          <input
            className="bg-white border border-indigo-600  h-full rounded p-0 mx-1 w-2/12"
            type="text"
            onChange={handlePageInput}
            value={pagesRead}
          />
          <p>Out of: {book.number_of_pages_median} pages.</p>
        </div>
      </div>

      <div className="mx-3 text-center h-6">
        <select
          className="bg-white border border-indigo-600  h-full rounded p-0 mx-1"
          value={score}
          onChange={handleSelectChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button
          className="bg-white border border-indigo-600 h-full rounded p-0"
          onClick={handleSubmit}
        >
          Submit review
        </button>
      </div>
    </>
  );
};

export default ReviewArea;
