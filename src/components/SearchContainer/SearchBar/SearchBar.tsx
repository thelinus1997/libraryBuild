import React, { useEffect, useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { TitleSearchTypes } from "../../../types/titleType";
import { useDispatch } from "react-redux";
const SearchBar = ({ choice }: { choice: string }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = async () => {
    if (choice === "authors") {
      console.log("hej");
      console.log(searchTerm);
      console.log(choice);

      await useSearch(searchTerm, choice, dispatch);
    } else if (choice === "books") {
      await useSearch(searchTerm, searchType, dispatch);
    }
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };
  useEffect(() => {
    if (choice === "authors") {
      setSearchType("name");
    }
  });

  return (
    <div className="flex items-center flex-col py-2 my-2">
      <h2 className="text-white text-3xl ">
        Search for {choice} by {searchType}:
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
        {choice === "books" && (
          <select
            className="mx-1 rounded"
            value={searchType}
            onChange={handleSelectChange}
          >
            <option value="title">title</option>
            <option value="author">author</option>
          </select>
        )}
        <button onClick={handleClick}>search</button>
      </div>
    </div>
  );
};

export default SearchBar;
