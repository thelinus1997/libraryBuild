import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavoriteBooks } from "../../Slices/favBookSlice";
import * as TitleTypes from "../../types/titleType";
import ResultCard from "../SearchContainer/ResultContainer/ResultCard/ResultCard";
import { createNestedArray } from "../../hooks/useNestedArray";

interface RetrievedBooks {
  books: [[]];
}

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<any>([[]]);
  const [paginationTracker, setPaginationTracker] = useState(0);
  const retrievedFavBookData = useSelector(
    getFavoriteBooks
  ) as unknown as RetrievedBooks;
  useEffect(() => {
    const nestedArray = createNestedArray(retrievedFavBookData.books);
    console.log(nestedArray);
    setFavoriteBooks(nestedArray);
  }, [retrievedFavBookData]);
  const handlePageUp = () => {
    if (paginationTracker === favoriteBooks.length - 1) {
      setPaginationTracker(0);
    } else {
      setPaginationTracker(paginationTracker + 1);
    }
  };
  const handlePageDown = () => {
    if (paginationTracker === 0) {
      return;
    } else {
      setPaginationTracker(paginationTracker - 1);
    }
  };
  return (
    <div>
      <div className="flex justify-center text-3xl">
        <h2>Your favorite books:</h2>
      </div>

      <div className="flex px-20 py-10 w-full flex-wrap justify-center">
        {favoriteBooks.length &&
          favoriteBooks[paginationTracker].map(
            (item: TitleTypes.Doc, index: number) => (
              <div key={index} className="flex px-10 w-72 ">
                <ResultCard item={item} inputType="remove" />
              </div>
            )
          )}
      </div>
      <div className="flex justify-center">
        <button className="px-10 mx-10" onClick={handlePageDown}>
          {" "}
          {"<"}{" "}
        </button>
        <button className="px-10 mx-10" onClick={handlePageUp}>
          {" "}
          {">"}{" "}
        </button>
      </div>
    </div>
  );
};

export default FavoriteBooks;
