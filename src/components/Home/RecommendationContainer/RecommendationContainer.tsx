import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAuthors } from "../../../Slices/favAuthorSlice";
import { getFavoriteBooks } from "../../../Slices/favBookSlice";
import { useSearch } from "../../../hooks/useSearch";
import { getRecommendations } from "../../../hooks/useReccomendations";

const RecommendationContainer = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [paginationArray, setPaginationArray] = useState([[]]);
  const [paginationTracker, setPaginationTracker] = useState(0);

  const favoriteAuthors = useSelector(getFavoriteAuthors);

  useEffect(() => {
    getRecommendations(favoriteAuthors.authors);
  }, [favoriteAuthors]);

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
