import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ByAuthor from "./ByAuthor/ByAuthor";
import ByGenre from "./ByGenre/ByGenre";
import { useSelector } from "react-redux";
import { getFavoriteAuthors } from "../../../Slices/favAuthorSlice";
import { getFavoriteBooks } from "../../../Slices/favBookSlice";

const RecommendationContainer = () => {
  const favoriteAuthors = useSelector(getFavoriteAuthors);
  const favoriteBooks = useSelector(getFavoriteBooks);
  useEffect(() => {
    console.log(favoriteAuthors);
    console.log(favoriteBooks);
  }, []);

  return (
    <div className="flex">
      <nav className="flex">
        <ul>
          <li className="inline-block mx-5">
            <Link to="/bygenre">Recommendations by genre </Link>
          </li>
          <li className="inline-block">
            <Link to="/byauthor"> Recommendations by author </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RecommendationContainer;
