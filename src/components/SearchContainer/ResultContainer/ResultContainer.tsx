import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../../../Slices/searchSlice";
import * as TitleTypes from "../../../types/titleType";
import * as AuthorTypes from "../../../types/authorType";
import { SearchResult } from "../../../Slices/searchSlice";
import { createNestedArray } from "../../../hooks/useNestedArray";
import ResultCard from "./ResultCard/ResultCard";
export interface SearchResultTypes {
  author?: [];
  title?: [];
}
const ResultContainer = () => {
  const [result, setResult] = useState<SearchResultTypes>();
  const [paginationArray, setPaginationArray] = useState<any>([[]]);
  const [paginationTracker, setPaginationTracker] = useState(0);
  const searchData = useSelector(
    selectSearchResult
  ) as unknown as SearchResult[];

  useEffect(() => {
    const newArray: any = searchData[0];
    setResult(newArray);
  }, [searchData]);
  useEffect(() => {
    const returnArray = createNestedArray(result);
    console.log(returnArray);
    setPaginationArray(returnArray);
  }, [result]);

  const handlePageUp = () => {
    if (paginationTracker === paginationArray.length) {
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
      <div>Hej</div>
      <div className="flex px-20 py-10">
        {paginationArray &&
          paginationArray[paginationTracker].map(
            (item: AuthorTypes.Doc | TitleTypes.Doc, index: number) => (
              <div key={index} className="flex px-10 w-75">
                <ResultCard item={item} />
              </div>
            )
          )}
      </div>
      <div>
        <button onClick={handlePageDown}> {"<"} </button>
        <button onClick={handlePageUp}> {">"} </button>
      </div>
    </div>
  );
};

export default ResultContainer;
