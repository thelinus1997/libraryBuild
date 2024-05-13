import React, { useEffect } from "react";
import * as TitleTypes from "../../../../types/titleType";
import * as AuthorTypes from "../../../../types/authorType";
import { useFavorite } from "../../../../hooks/useFavorite";
import { useDispatch } from "react-redux";

interface ResultCardProps {
  item: TitleTypes.Doc | AuthorTypes.Doc;
  inputType: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ item, inputType }) => {
  const handleFavorite = (input: string) => {
    useFavorite(input, dispatch, inputType, item);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(inputType);
  });
  return (
    <div
      className="border w-full
     bg-white rounded-md text-black"
    >
      <div>
        <img
          className="m-4 w-10/12"
          src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
          alt={`${item.title}`}
        />
      </div>
      <div className="m-3">Book title: {item.title}</div>
      <p className="m-3">Published: {item.first_publish_year}</p>
      <p className="m-3">Author(s): {item.author_name}</p>
      {inputType === "add" && (
        <div className="flex flex-col items-center">
          <button
            className="text-white my-2 "
            onClick={() => handleFavorite("book")}
          >
            Favorite this book
          </button>
          <button
            className="text-white"
            onClick={() => handleFavorite("author")}
          >
            Favorite this author
          </button>
        </div>
      )}
      {inputType === "remove" && (
        <div className="flex flex-col items-center ">
          <button
            className="text-white "
            onClick={() => handleFavorite("book")}
          >
            Remove from favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
