import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAuthors } from "../../Slices/favAuthorSlice";
import { useFavorite } from "../../hooks/useFavorite";
interface favAuthorsType {
  authors: string[];
}
const FavoriteAuthors = () => {
  const [favAuthors, setFavAuthors] = useState<string[]>([]);
  const favoriteAuthorsdata = useSelector(
    getFavoriteAuthors
  ) as unknown as favAuthorsType;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(favoriteAuthorsdata.authors);
    setFavAuthors(favoriteAuthorsdata.authors);
  }, [favoriteAuthorsdata]);
  const handleRemove = (authorName: string) => {
    useFavorite("author", dispatch, "remove", authorName);
  };
  return (
    <div className="text-white flex flex-col items-center">
      <h2 className="text-3xl">Your Favorite Authors</h2>
      {favAuthors &&
        favAuthors.map((authors, index) => (
          <div key={index} className="flex flex-row h-20 w-60 justify-between">
            <p className="text-2xl">{authors}</p>
            <button
              className="text-black h-10"
              onClick={() => handleRemove(authors)}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
};

export default FavoriteAuthors;
