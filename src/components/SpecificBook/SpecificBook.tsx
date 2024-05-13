import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Doc } from "../../types/titleType";

const SpecificBook = () => {
  const [book, setBook] = useState<Doc>();
  const [score, setScore] = useState(1);
  const [pagesRead, setPagesRead] = useState(0);
  let { state } = useLocation();
  useEffect(() => {
    setBook(state.value);
  }, [state]);

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
            <p className="mx-3 text-center">
              Number of people who have read this book:{" "}
              {book.already_read_count}
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
              <button className="bg-white border border-indigo-600 h-full rounded p-0">
                Submit score
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificBook;
