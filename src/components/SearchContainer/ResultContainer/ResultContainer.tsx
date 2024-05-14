import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../../../Slices/searchSlice";
import * as TitleTypes from "../../../types/titleType";
import * as AuthorTypes from "../../../types/authorType";
import { SearchResult } from "../../../Slices/searchSlice";
import { createNestedArray } from "../../../hooks/useNestedArray";
import ResultCard from "./ResultCard/ResultCard";
import {
  AuthorDataSearchState,
  getAuthorDataSliceData,
} from "../../../Slices/authorDataSlice";
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
      const newArray: any = authorSearchData.result[0].author;
      setResult(newArray);
    }
  }, [searchData, authorSearchData]);

  useEffect(() => {
    const returnArray = createNestedArray(result);
    console.log(returnArray);
    setPaginationArray(returnArray);
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
      <div className="flex px-20 py-10 w-full flex-wrap">
        {paginationArray &&
          paginationArray[paginationTracker].map(
            (item: AuthorTypes.Doc | TitleTypes.Doc, index: number) => (
              <div key={index} className="flex px-10 w-72 ">
                <ResultCard item={item} inputType={"add"} />
              </div>
            )
          )}
      </div>
      <div className="flex justify-center">
        <button className="px-10 mx-10" onClick={handlePageDown}>
          {" "}
          {"<"}{" "}
        </button>
        <button className="px-10 mx-10" onClick={handlePageUp}>
          {" "}
          {">"}{" "}
        </button>
      </div>
    </div>
  );
};

export default ResultContainer;
