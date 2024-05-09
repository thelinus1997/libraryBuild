import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ByAuthor from "./ByAuthor/ByAuthor";
import ByGenre from "./ByGenre/ByGenre";

const RecommendationContainer = () => {
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
