import React, { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { TitleSearchTypes } from "../../types/titleType";
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [menuVis, setmenuVis] = useState(false);
  const [books, setBooks] = useState<TitleSearchTypes>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  const handleClick = async () => {
    useSearch(searchTerm, searchType);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };
  useEffect(() => {
    console.log(searchType);
  }, [searchType]);
  return (
    <>
      <h2 id="searchTitle">Search for a book by {searchType}:</h2>
      <div className="searchContainer flex">
        <input
          className="border border-indigo-600 rounded"
          type="text"
          name="search"
          id="searchBar"
          value={searchTerm}
          onChange={handleChange}
        />
        <select value={searchType} onChange={handleSelectChange}>
          <option value="title">title</option>
          <option value="author">author</option>
        </select>
        <button onClick={handleClick}>search</button>
      </div>
    </>
  );
};

export default Searchbar;
