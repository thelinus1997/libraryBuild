import React, { useEffect, useState } from "react";
import * as TitleTypes from "../../../../types/titleType";
import * as AuthorTypes from "../../../../types/authorType";
import { useFavorite } from "../../../../hooks/useFavorite";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Notification from "../../../Notification/Notification";
interface ResultCardProps {
  item: TitleTypes.Doc | AuthorTypes.Doc;
  inputType: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ item, inputType }) => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const handleFavorite = (input: string) => {
    useFavorite(input, dispatch, inputType, item);
    setNotificationText(
      `${input === "book" ? "Book" : "Author"} has been ${
        inputType === "add" ? "added to" : "removed from"
      } favorites.`
    );
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(inputType);
  });
  return (
    <div className="border w-full bg-white rounded-md text-black flex flex-col p-3">
      <Notification visible={notificationVisible} text={notificationText} />
      <div>
        <img
          className="m-4 w-10/12"
          src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
          alt={`${item.title}`}
        />
      </div>
      <div className="m-2">Book title: {item.title}</div>
      <p className="m-2">Published: {item.first_publish_year}</p>
      <p className="m-2">Author(s): {item.author_name}</p>
      <div className="flex flex-col items-center mt-auto w-full">
        {inputType === "add" && (
          <>
            <button
              className="text-white w-full bg-indigo-600 my-1 h-8 flex items-center justify-center"
              onClick={() => handleFavorite("book")}
            >
              Favorite this book
            </button>
            <button
              className="text-white w-full bg-indigo-600 my-1 h-8 flex items-center justify-center"
              onClick={() => handleFavorite("author")}
            >
              Favorite this author
            </button>
          </>
        )}
        {inputType === "remove" && (
          <button
            className="text-white w-full bg-indigo-600 my-1 h-8 flex items-center justify-center"
            onClick={() => handleFavorite("book")}
          >
            Remove
          </button>
        )}
        <button className="text-white w-full bg-indigo-600 my-1 h-8 flex items-center justify-center">
          <Link
            className="text-white"
            to="/specificBook"
            state={{ value: item }}
          >
            Read more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
