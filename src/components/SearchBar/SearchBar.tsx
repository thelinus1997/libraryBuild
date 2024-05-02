import React, { useEffect, useState } from "react";
import { searchBookTitle } from "../../API/libraryApi";
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  useEffect(() => {
    if (searchTerm) {
      const fixedSearch: string = searchTerm.replace(/ /g, "+");
      console.log(fixedSearch);
      try {
        const fetchData = async () => {
          const response = await searchBookTitle(fixedSearch);
          console.log(response);
        };
        fetchData();
      } catch (e) {
        console.error(e);
      }
    }
  }, [searchTerm]);
  return (
    <>
      <div className="searchContainer">
        <h2 id="searchTitle">Search for a book by title:</h2>
        <input
          type="text"
          name="search"
          id="searchBar"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Searchbar;
