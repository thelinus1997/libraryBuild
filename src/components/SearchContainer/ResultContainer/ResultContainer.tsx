import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../../../Slices/searchSlice";
import { TitleSearchTypes } from "../../../types/titleType";
import { AuthorSearchType } from "../../../types/authorType";

const ResultContainer = () => {
  const [result, setResult] = useState<TitleSearchTypes | AuthorSearchType>();
  const searchData = useSelector(selectSearchResult);

  useEffect(() => {
    setResult(searchData);
    console.log(result);
  }, [searchData]);
  return (
    <div>
      <div>Hej</div>
      <ul>
        {/* {result &&
          result.docs.map((title, index) => <li key={index}>{title.title}</li>)} */}
      </ul>
    </div>
  );
};

export default ResultContainer;
