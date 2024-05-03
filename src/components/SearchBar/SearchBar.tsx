import React, { useEffect, useState } from "react";
import { searchBookTitle } from "../../API/libraryApi";
import useDebounce from "../../hooks/useDebounce";
import { TitleSearchTypes } from "../../types/titleType";
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<TitleSearchTypes>();
  const debouncedSearchTerm: string = useDebounce(searchTerm, 1000);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  useEffect(() => {
    if (debouncedSearchTerm) {
      const fixedSearch: string = debouncedSearchTerm.replace(/ /g, "+");
      console.log(fixedSearch);
      try {
        const fetchData = async () => {
          const response = await searchBookTitle(fixedSearch);
          if (response) {
            setBooks(response);
          }
        };
        fetchData();
      } catch (e) {
        console.error(e);
      }
    }
  }, [debouncedSearchTerm]);
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
        <ul>
          {books &&
            books.docs.map((book, index) => <li key={index}>{book.title}</li>)}
        </ul>
      </div>
    </>
  );
};

export default Searchbar;
