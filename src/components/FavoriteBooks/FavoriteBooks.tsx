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
      <div className="flex px-20 py-10">
        {favoriteBooks &&
          favoriteBooks.books.map((item, index) => (
            <div key={index} className="flex px-10 w-75">
              <ResultCard item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FavoriteBooks;
