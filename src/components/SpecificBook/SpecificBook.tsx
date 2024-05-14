import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Doc } from "../../types/titleType";
import { getReviews } from "../../Slices/reviewSlice";
import { useSelector } from "react-redux";
import ReviewArea from "./ReviewArea";

const SpecificBook = () => {
  const [book, setBook] = useState<Doc>();

  const reviewData = useSelector(getReviews);
  let { state } = useLocation();

  useEffect(() => {
    setBook(state.value);
  }, [state]);

  return (
    <div className="flex justify-center my-10 ">
      {book && (
        <div className="flex border border-indigo-600 bg-white text-black items-center w-11/12 rounded">
          <div className="flex-col w-6/12 justify-center">
            <h2 className="text-3xl text-center">{book.title}</h2>
            <div className="w-full flex justify-center">
              <img
                className="m-4 w-2/12"
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`${book.title}`}
              />
            </div>
            <p className="m-3 text-center">
              Published: {book.first_publish_year}
            </p>
            <p className="m-3 text-center">Author(s): {book.author_name}</p>
            <div className="m-3 text-center">
              {book.first_sentence &&
                book.first_sentence.map((sentance, index) => (
                  <p className="my-3" key={index}>
                    {sentance}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex-col w-6/12 justify-center">
            {!reviewData && <ReviewArea book={book} />}
            {reviewData && <ReviewArea book={book} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificBook;
