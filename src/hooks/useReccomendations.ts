import { useDispatch } from "react-redux";
import { useSearch } from "./useSearch";
import { useEffect, useState } from "react";
import { createNestedArray } from "./useNestedArray";

export const getRecommendations = async (favAuthorArray: string[]) => {
  const [recommendations, setRecommendations] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (favAuthorArray.length > 0) {
        const allRecommendations: any[] = [];
        for (let i = 0; i < favAuthorArray.length; i++) {
          const response = await useSearch(
            favAuthorArray[i],
            "author",
            dispatch
          );
        }
        setRecommendations(allRecommendations);
      }
    };

    fetchRecommendations();
  }, [favAuthorArray, dispatch]);

  useEffect(() => {
    const nestedArray = createNestedArray(recommendations);
  }, [favAuthorArray]);
};
