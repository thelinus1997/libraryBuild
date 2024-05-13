import React, { useEffect, useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { TitleSearchTypes } from "../../../types/titleType";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = async () => {
    await useSearch(searchTerm, searchType, dispatch);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="flex items-center flex-col ">
      <h2 className="text-white text-3xl my-5">
        Search for a book by {searchType}:
      </h2>
      <div className="searchContainer flex ">
        <input
          className="border border-indigo-600 rounded"
          type="text"
          name="search"
          id="searchBar"
          value={searchTerm}
          onChange={handleChange}
        />
        <select
          className="mx-1 rounded"
          value={searchType}
          onChange={handleSelectChange}
        >
          <option value="title">title</option>
          <option value="author">author</option>
        </select>
        <button onClick={handleClick}>search</button>
      </div>
    </div>
  );
};

export default SearchBar;
