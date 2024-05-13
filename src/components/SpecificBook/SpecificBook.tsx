import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Doc } from "../../types/titleType";

const SpecificBook = () => {
  const [book, setBook] = useState<Doc>();
  let { state } = useLocation();
  useEffect(() => {
    setBook(state.value);
  }, [state]);
  console.log(state.value);
  return (
    <div className="flex justify-around my-10 ">
      {book && (
        <div className="flex flex-col border border-indigo-600 bg-white text-black items-center w-11/12 rounded">
          <div className="flex flex-col w-full items-center">
            <div className="flex m-3 ">
              <h2 className="text-3xl">{book.title}</h2>
            </div>
            <img
              className="m-4 w-4/12"
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={`${book.title}`}
            />
            <div>
              <p className="m-3">Published: {book.first_publish_year}</p>
              <p className="m-3">Author(s): {book.author_name}</p>
              <div className="m-3">
                <p>{book.first_sentence && book.first_sentence[2]}</p>
              </div>
            </div>
            <div className="flex flex-row m-3">
              <p>
                Number of people who have read this book:{" "}
                {book.already_read_count}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificBook;
