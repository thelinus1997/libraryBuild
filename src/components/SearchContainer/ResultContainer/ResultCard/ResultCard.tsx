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
    <div className="border w-70 bg-white rounded-md">
      <div>
        <img
          className="m-10"
          src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
          alt={`${item.title}`}
        />
      </div>
      <div>Book title: {item.title}</div>
      <p>Published: {item.first_publish_year}</p>
      <p>Author(s): {item.author_name}</p>
      {inputType === "add" && (
        <div>
          <button onClick={() => handleFavorite("book")}>
            Favorite this book
          </button>
          <button onClick={() => handleFavorite("author")}>
            Favorite this author
          </button>
        </div>
      )}
      {inputType === "remove" && (
        <div>
          <button onClick={() => handleFavorite("book")}>
            Remove from favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
