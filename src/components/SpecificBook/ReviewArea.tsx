import React, { useState } from "react";
import * as TitleTypes from "../../types/titleType";
import * as AuthorTypes from "../../types/authorType";
import { useDispatch } from "react-redux";
import { useReview } from "../../hooks/useReview";
interface ReviewAreaProps {
  book: TitleTypes.Doc | AuthorTypes.Doc;
}
const ReviewArea: React.FC<ReviewAreaProps> = ({ book }) => {
  const [score, setScore] = useState(1);
  const [pagesRead, setPagesRead] = useState(0);
  const dispatch = useDispatch();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScore(parseInt(e.target.value));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value)) {
      setPagesRead(parseInt(e.target.value));
    } else {
      setPagesRead(0);
    }
  };

  const handleSubmit = () => {
    if (pagesRead !== 0) {
      if (book) {
        useReview(book.title, score, pagesRead, dispatch);
      }
    }
  };

  return (
    <>
      <p className="mx-3 text-center">
        Number of people who have read this book: {book.already_read_count}
      </p>
      <div className="mx-3 my-10 text-center">
        How many pages have you read?
        <div className="flex flex-row justify-center">
          <input
            className="bg-white border border-indigo-600  h-full rounded p-0 mx-1 w-2/12"
            type="text"
            onChange={handleInput}
            value={pagesRead}
          />
          <p>Out of: {book.number_of_pages_median} pages.</p>
        </div>
      </div>
      <div className="mx-3 text-center">
        Have you finished reading this book? Leave a review!
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
          Submit score
        </button>
      </div>
    </>
  );
};

export default ReviewArea;
