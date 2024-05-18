import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../../../Slices/searchSlice";
import * as TitleTypes from "../../../types/titleType";
import * as AuthorTypes from "../../../types/authorType";
import { SearchResult } from "../../../Slices/searchSlice";
import { createNestedArray } from "../../../hooks/useNestedArray";
import ResultCard from "./ResultCard/ResultCard";
import * as AuthorSpecificsTypes from "../../../types/authorDataType";
import {
  AuthorDataSearchState,
  getAuthorDataSliceData,
} from "../../../Slices/authorDataSlice";
import { AuthorCard } from "./AuthorCard/AuthorCard";
import PaginationButton from "../../PaginationButton/PaginationButton";

export interface SearchResultTypes {
  author?: [];
  title?: [];
}

const ResultContainer = ({ choice }: { choice: string }) => {
  const [result, setResult] = useState<SearchResultTypes>();
  const [paginationArray, setPaginationArray] = useState<any>([[]]);
  const [paginationTracker, setPaginationTracker] = useState(0);
  const searchData = useSelector(
    selectSearchResult
  ) as unknown as SearchResult[];
  const authorSearchData = useSelector(
    getAuthorDataSliceData
  ) as unknown as AuthorDataSearchState[];

  useEffect(() => {
    if (choice === "books") {
      const newArray: any = searchData[0];
      setResult(newArray);
    } else if (choice === "authors") {
      const newArray: any = authorSearchData.result[0];
      setResult(newArray);
    }
  }, [searchData, authorSearchData]);

  useEffect(() => {
    if (result) {
      const returnArray = createNestedArray(result);
      setPaginationArray(returnArray);
    }
  }, [result]);

  const handlePageUp = () => {
    if (paginationTracker === paginationArray.length - 1) {
      setPaginationTracker(0);
    } else {
      setPaginationTracker(paginationTracker + 1);
    }
  };

  const handlePageDown = () => {
    if (paginationTracker === 0) {
      return;
    } else {
      setPaginationTracker(paginationTracker - 1);
    }
  };

  return (
    <div>
      {choice === "books" && paginationArray[paginationTracker]?.length > 0 && (
        <div className="flex w-full flex-wrap justify-evenly">
          {paginationArray[paginationTracker].map(
            (item: AuthorTypes.Doc | TitleTypes.Doc, index: number) => (
              <div key={index} className="flex px-5 w-72 ">
                <ResultCard item={item} inputType={"add"} />
              </div>
            )
          )}
        </div>
      )}
      {choice === "authors" &&
        paginationArray[paginationTracker]?.length > 0 && (
          <div className="flex flex-wrap w-full justify-evenly">
            {paginationArray[paginationTracker].map(
              (item: AuthorSpecificsTypes.Doc, index: number) => (
                <div key={index} className="flex px-5 w-72 ">
                  <AuthorCard item={item} inputType={"add"} />
                </div>
              )
            )}
          </div>
        )}
      <div className="flex justify-center">
        <PaginationButton onClick={handlePageDown}> {"<"} </PaginationButton>
        <PaginationButton onClick={handlePageUp}> {">"} </PaginationButton>
      </div>
    </div>
  );
};

export default ResultContainer;
