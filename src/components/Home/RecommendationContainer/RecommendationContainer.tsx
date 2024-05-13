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
        <div className="flex items-center">
          Recommendations based on your favorite authors
        </div>
      </nav>
    </div>
  );
};

export default RecommendationContainer;
