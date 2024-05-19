import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAuthors } from "../../../Slices/favAuthorSlice";
import { getFavoriteBooks } from "../../../Slices/favBookSlice";
import { useSearch } from "../../../hooks/useSearch";
import { useRecommendations } from "../../../hooks/useReccomendations";
import ResultContainer from "../../SearchContainer/ResultContainer/ResultContainer";

const RecommendationContainer = () => {
  const [recommendations, setRecommendations] = useState<any>([]);
  const [paginationArray, setPaginationArray] = useState([[]]);
  const [paginationTracker, setPaginationTracker] = useState(0);

  const favoriteAuthors = useSelector(getFavoriteAuthors);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await useRecommendations(favoriteAuthors.authors);
      setRecommendations(response); // Set the recommendations here
    };

    fetchRecommendations();
  }, [favoriteAuthors]);

  useEffect(() => {
    console.log(recommendations);
  }, [recommendations]);

  return (
    <div className="flex items-center flex-col py-2 my-2">
      <h2 className="align-center text-3xl">
        Recommendations based on your favorite authors
      </h2>
      {recommendations && (
        <ResultContainer choice={"books"} recommendations={recommendations} />
      )}
    </div>
  );
};

export default RecommendationContainer;
