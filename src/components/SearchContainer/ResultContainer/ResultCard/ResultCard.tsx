import React from "react";
import * as TitleTypes from "../../../../types/titleType";
import * as AuthorTypes from "../../../../types/authorType";
import { useFavorite } from "../../../../hooks/useFavorite";
import { useDispatch } from "react-redux";

interface ResultCardProps {
  item: TitleTypes.Doc | AuthorTypes.Doc;
}

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
  const handleFavorite = (input: string) => {
    useFavorite(item, input, dispatch);
  };
  const dispatch = useDispatch();
  return (
    <div className="border w-60">
      <div>
        <img
          src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
          alt={`${item.title}`}
        />
      </div>
      <div>Book title: {item.title}</div>
      <p>Published: {item.first_publish_year}</p>
      <p>Author(s): {item.author_name}</p>
      <button onClick={() => handleFavorite("book")}>Favorite this book</button>
      <button onClick={() => handleFavorite("author")}>
        Favorite this author
      </button>
    </div>
  );
};

export default ResultCard;
