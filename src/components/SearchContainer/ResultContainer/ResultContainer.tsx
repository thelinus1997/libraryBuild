import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../../../Slices/searchSlice";
import * as TitleTypes from "../../../types/titleType";
import * as AuthorTypes from "../../../types/authorType";
import { SearchResult } from "../../../Slices/searchSlice";
interface SearchResultTypes {
  author?: [];
  title?: [];
}
const ResultContainer = () => {
  const [result, setResult] = useState<SearchResultTypes>();
  const [authorResult, setAuthorResult] = useState([]);
  const [titleResult, setTitleResult] = useState([]);

  const searchData = useSelector(
    selectSearchResult
  ) as unknown as SearchResult[];

  useEffect(() => {
    const newArray: any = searchData[0];
    setResult(newArray);
  }, [searchData]);

  return (
    <div>
      <div>Hej</div>
      <ul>
        {result?.author &&
          result.author.map((book: AuthorTypes.Doc, index) => (
            <li key={index}>{book.title}</li>
          ))}
        {result?.title &&
          result.title.map((book: TitleTypes.Doc, index) => (
            <li key={index}>{book.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default ResultContainer;
