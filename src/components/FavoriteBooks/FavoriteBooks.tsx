import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavoriteBooks } from "../../Slices/favBookSlice";
import { Doc } from "../../types/titleType";
import ResultCard from "../SearchContainer/ResultContainer/ResultCard/ResultCard";

interface RetrievedBooks {
  books: [];
}

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<RetrievedBooks>();
  const retrievedFavBookData = useSelector(
    getFavoriteBooks
  ) as unknown as RetrievedBooks;
  useEffect(() => {
    console.log(retrievedFavBookData.books);
    setFavoriteBooks(retrievedFavBookData);
  }, [retrievedFavBookData]);

  return (
    <div>
      <div className="flex">
        {favoriteBooks &&
          favoriteBooks.books.map((item, index) => (
            <li key={index} className="flex">
              <ResultCard item={item} />
            </li>
          ))}
      </div>
    </div>
  );
};

export default FavoriteBooks;
